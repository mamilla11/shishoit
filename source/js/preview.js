'use strict';

(function () {
  var Size = {
    REGULAR: ' 1x',
    DOUBLED: ' 2x'
  };

  /**
   * @class Preview
   * @description All future preview behaviour should be added to this class.
   * @prop {Object} picture - picture information.
   * @prop {Element} view - root element of picture preview DOM element.
   * @prop {Object} elements - child elements of picture preview DOM element.
   * @param {Object} picture - picture information.
   */
  var Preview = function (picture) {
    this.picture = picture;
    this.view = null;
    this.elements = {};

    this.initView();
  };

  /**
  * Initializes preview DOM element.
  */
  Preview.prototype.initView = function () {
    this.view = document.querySelector(window.templates.Preview.name)
                        .content
                        .querySelector(window.templates.Preview.Selector.CONTAINER)
                        .cloneNode(true);

    this.elements.imageJpeg = this.view.querySelector(
        window.templates.Preview.Selector.JPEG
    );
    this.elements.imageWebp = this.view.querySelector(
        window.templates.Preview.Selector.WEBP
    );

    this.elements.imageJpeg.src = this.picture.preview.src1x;
    this.elements.imageJpeg.srcset = this.picture.preview.src2x + Size.DOUBLED;
    this.elements.imageJpeg.alt = this.picture.desc;

    this.elements.imageWebp.srcset = this.picture.preview.src1x_webp +
                                      Size.REGULAR + ', ' +
                                      this.picture.preview.src2x_webp +
                                      Size.DOUBLED;
  };

  window.Preview = Preview;
})();
