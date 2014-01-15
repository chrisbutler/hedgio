Template.showLayout.rendered = function() {
  $('video.autoplayable').each(function() {
    $(this).get(0).play();
  });
}