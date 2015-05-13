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

$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});
