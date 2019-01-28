
(function () {
  var photos = [
    {
      preview: {
        src1x: "img/raster/gallery/preview_1@1x.jpeg",
        src2x: "img/raster/gallery/preview_1@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_1@1x.webp",
        src2x_webp: "img/webp/gallery/preview_1@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_1@1x.jpeg",
        src2x: "img/raster/gallery/photo_1@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_1@1x.webp",
        src2x_webp: "img/webp/gallery/photo_1@2x.webp"
      },
      desc: "Spider - Debug platform"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_2@1x.jpeg",
        src2x: "img/raster/gallery/preview_2@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_2@1x.webp",
        src2x_webp: "img/webp/gallery/preview_2@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_2@1x.jpeg",
        src2x: "img/raster/gallery/photo_2@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_2@1x.webp",
        src2x_webp: "img/webp/gallery/photo_2@2x.webp"
      },
      desc: "Bee - Wireless weather station"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_3@1x.jpeg",
        src2x: "img/raster/gallery/preview_3@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_3@1x.webp",
        src2x_webp: "img/webp/gallery/preview_3@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_3@1x.jpeg",
        src2x: "img/raster/gallery/photo_3@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_3@1x.webp",
        src2x_webp: "img/webp/gallery/photo_3@2x.webp"
      },
      desc: "Swallow - Weather station"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_4@1x.jpeg",
        src2x: "img/raster/gallery/preview_4@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_4@1x.webp",
        src2x_webp: "img/webp/gallery/preview_4@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_4@1x.jpeg",
        src2x: "img/raster/gallery/photo_4@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_4@1x.webp",
        src2x_webp: "img/webp/gallery/photo_4@2x.webp"
      },
      desc: "Workflow mess"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_5@1x.jpeg",
        src2x: "img/raster/gallery/preview_5@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_5@1x.webp",
        src2x_webp: "img/webp/gallery/preview_5@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_5@1x.jpeg",
        src2x: "img/raster/gallery/photo_5@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_5@1x.webp",
        src2x_webp: "img/webp/gallery/photo_5@2x.webp"
      },
      desc: "Have no idea what is it"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_6@1x.jpeg",
        src2x: "img/raster/gallery/preview_6@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_6@1x.webp",
        src2x_webp: "img/webp/gallery/preview_6@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_6@1x.jpeg",
        src2x: "img/raster/gallery/photo_6@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_6@1x.webp",
        src2x_webp: "img/webp/gallery/photo_6@2x.webp"
      },
      desc: "Dragonfly - Wireless weather station"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_7@1x.jpeg",
        src2x: "img/raster/gallery/preview_7@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_7@1x.webp",
        src2x_webp: "img/webp/gallery/preview_7@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_7@1x.jpeg",
        src2x: "img/raster/gallery/photo_7@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_7@1x.webp",
        src2x_webp: "img/webp/gallery/photo_7@2x.webp"
      },
      desc: "Swallow - Weather station"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_8@1x.jpeg",
        src2x: "img/raster/gallery/preview_8@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_8@1x.webp",
        src2x_webp: "img/webp/gallery/preview_8@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_8@1x.jpeg",
        src2x: "img/raster/gallery/photo_8@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_8@1x.webp",
        src2x_webp: "img/webp/gallery/photo_8@2x.webp"
      },
      desc: "Bee - Wireless weather station"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_9@1x.jpeg",
        src2x: "img/raster/gallery/preview_9@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_9@1x.webp",
        src2x_webp: "img/webp/gallery/preview_9@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_9@1x.jpeg",
        src2x: "img/raster/gallery/photo_9@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_9@1x.webp",
        src2x_webp: "img/webp/gallery/photo_9@2x.webp"
      },
      desc: "Dragonfly - Weather station"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_10@1x.jpeg",
        src2x: "img/raster/gallery/preview_10@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_10@1x.webp",
        src2x_webp: "img/webp/gallery/preview_10@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_10@1x.jpeg",
        src2x: "img/raster/gallery/photo_10@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_10@1x.webp",
        src2x_webp: "img/webp/gallery/photo_10@2x.webp"
      },
      desc: "Swallow - Weather station"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_11@1x.jpeg",
        src2x: "img/raster/gallery/preview_11@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_11@1x.webp",
        src2x_webp: "img/webp/gallery/preview_11@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_11@1x.jpeg",
        src2x: "img/raster/gallery/photo_11@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_11@1x.webp",
        src2x_webp: "img/webp/gallery/photo_11@2x.webp"
      },
      desc: "Home server 2nd edition"
    },
    {
      preview: {
        src1x: "img/raster/gallery/preview_12@1x.jpeg",
        src2x: "img/raster/gallery/preview_12@2x.jpeg",
        src1x_webp: "img/webp/gallery/preview_12@1x.webp",
        src2x_webp: "img/webp/gallery/preview_12@2x.webp"
      },
      fullsize: {
        src1x: "img/raster/gallery/photo_12@1x.jpeg",
        src2x: "img/raster/gallery/photo_12@2x.jpeg",
        src1x_webp: "img/webp/gallery/photo_12@1x.webp",
        src2x_webp: "img/webp/gallery/photo_12@2x.webp"
      },
      desc: "Home server 1st edition"
    }
  ];

  window.photos = photos;
})();
