'use strict';

(function () {
  var Size = {
    REGULAR: ' 1x',
    DOUBLED: ' 2x'
  };

  /**
   * @class PhotoModal
   * @prop {Object} photo - photo information.
   * @prop {Element} view - root element of picture popup DOM element.
   * @prop {Object} elements - child elements of picture popup DOM element.
   */
  var PhotoModal = function () {
    this.photo = null;
    this.view = null;
    this.elements = {};

    this.initView();
    this.addEventListeners();
  };

  /**
  * Initializes view and elements collection.
  */
  PhotoModal.prototype.initView = function () {
    this.view = document.querySelector(
        window.elements.PhotoModal.CONTAINER
    );
    this.elements.body = document.querySelector(
        window.elements.PhotoModal.BODY
    );
    this.elements.imageJpeg = this.view.querySelector(
        window.elements.PhotoModal.JPEG
    );
    this.elements.imageWebp = this.view.querySelector(
        window.elements.PhotoModal.WEBP
    );
    this.elements.description = this.view.querySelector(
        window.elements.PhotoModal.DESCRIPTION
    );
    this.elements.closeButton = this.view.querySelector(
        window.elements.PhotoModal.CLOSE_BUTTON
    );
  };

  /**
  * Shows full scale picture popup.
  */
  PhotoModal.prototype.show = function () {
    this.view.classList.remove('hidden');
    this.elements.body.classList.add('modal-open');
    this.view.focus();
  };

  /**
  * Hides full scale picture popup.
  */
  PhotoModal.prototype.hide = function () {
    this.view.classList.add('hidden');
    this.elements.body.classList.remove('modal-open');
  };

  /**
  * Sets up new picture.
  * @param {Object} photo - photo information.
  */
  PhotoModal.prototype.setPhoto = function (photo) {
    this.photo = photo;

    this.elements.imageJpeg.src = this.photo.fullsize.src1x;
    this.elements.imageJpeg.srcset = this.photo.fullsize.src2x + Size.DOUBLED;
    this.elements.imageJpeg.alt = this.photo.desc;

    this.elements.imageWebp.srcset = this.photo.fullsize.src1x_webp +
                                      Size.REGULAR + ', ' +
                                      this.photo.fullsize.src2x_webp +
                                      Size.DOUBLED;

    this.elements.description.textContent = this.photo.desc;
  };

  /**
  * Sets up event handlers.
  */
  PhotoModal.prototype.addEventListeners = function () {
    this.view.addEventListener('keydown', function (evt) {
      if (window.utils.isEscKeyCode(evt.keyCode)) {
        this.hide();
      }
    }.bind(this));

    this.elements.closeButton.addEventListener('click', function () {
      this.hide();
    }.bind(this));
  };

  window.PhotoModal = PhotoModal;
})();
