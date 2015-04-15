$(function() {

  var $allVideos = $("iframe"), $fluidEl = $("article");

  $allVideos.each(function() {

    $(this)
      .data('aspectRatio', this.height / this.width)

      // remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

  });

  $(window).resize(function() {

    var newWidth = $fluidEl.width();

    $allVideos.each(function() {

      var $el = $(this);
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));

    });

  }).resize();
});

