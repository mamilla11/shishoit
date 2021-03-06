'use strict';

(function () {
  var previewsContainer = document.querySelector(window.elements.Gallery.CONTAINER);
  var nextPhotoButton = document.querySelector(window.elements.Gallery.NEXT_PHOTO);
  var prevPhotoButton = document.querySelector(window.elements.Gallery.PREV_PHOTO);
  var closeButton = document.querySelector(window.elements.Gallery.CLOSE_BUTTON);

  var photoModal = new window.PhotoModal();
  var previews = [];
  var currentPreviewIndex = -1;

  /**
  * Picture preview click event handler.
  * Shows popup with full scale picture.
  * @param {number} index - picture preview index.
  */
  var onPreviewPhotoClick = function (index) {
    currentPreviewIndex = index;
    photoModal.setPhoto(previews[index].picture);
    photoModal.show();
    document.addEventListener('keydown', onArrowClick);
  };

  var onArrowClick = function (evt) {
    if (window.utils.isRightArrowKeyCode(evt.keyCode)) {
      showNextPhoto();
    };
    if (window.utils.isLeftArrowKeyCode(evt.keyCode)) {
      showPrevPhoto();
    };
  };

  var onNextPhotoButtonClick = function () {
    showNextPhoto();
  };

  var onPrevPhotoButtonClick = function () {
    showPrevPhoto();
  };

  var onCloseButtonClick = function () {
    document.removeEventListener('keydown', onArrowClick);
  };

  var showNextPhoto = function () {
    var index = currentPreviewIndex;
    currentPreviewIndex = ++index < previews.length ? index : 0;
    photoModal.setPhoto(previews[currentPreviewIndex].picture);
  };

  var showPrevPhoto = function () {
    var index = currentPreviewIndex;
    currentPreviewIndex = --index >= 0 ? index : previews.length - 1;
    photoModal.setPhoto(previews[currentPreviewIndex].picture);
  };

  var createPreviews = function () {
    previews = [];

    window.photos.forEach(function (photo) {
      previews.push(new window.Preview(photo));
    });
  };

  /**
  * Adds event handlers.
  */
  var addEventHandlers = function () {
    previews.forEach(function (preview) {
      preview.view.addEventListener('click', function (evt) {
        evt.preventDefault();
        onPreviewPhotoClick(previews.indexOf(preview));
      });
    });

    nextPhotoButton.addEventListener('click', onNextPhotoButtonClick);
    prevPhotoButton.addEventListener('click', onPrevPhotoButtonClick);
    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', function (evt) {
      if (window.utils.isEscKeyCode(evt.keyCode)) {
        onCloseButtonClick();
      }
    });
  };

  var showPreviews = function () {
    createPreviews();

    var fragment = document.createDocumentFragment();

    previews.slice().forEach(function (preview) {
      fragment.appendChild(preview.view);
    });

    previewsContainer.appendChild(fragment);

    addEventHandlers();
  };

  window.gallery = {
    showPreviews: showPreviews
  };
})();
