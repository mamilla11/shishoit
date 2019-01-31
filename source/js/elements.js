'use strict';

(function () {
  var Page = {
    BODY: 'body',
    MAIN: 'main'
  };
  var PhotoModal = {
    BODY: 'body',
    CONTAINER: '.gallery__modal',
    CLOSE_BUTTON: '.photo__button--close',
    JPEG: '.photo__img--jpeg',
    WEBP: '.photo__img--webp',
    DESCRIPTION: '.photo__description'
  };
  var Gallery = {
    CONTAINER: '.gallery__wrapper',
    NEXT_PHOTO: '.photo__button--next',
    PREV_PHOTO: '.photo__button--prev',
    CLOSE_BUTTON: '.photo__button--close'
  }

  window.elements = {
    Page: Page,
    PhotoModal: PhotoModal,
    Gallery: Gallery
  };
})();
