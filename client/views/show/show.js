Template.showPicker.helpers({
  shows: function() {
    return Shows.find();
  }
});

Template.showPicker.rendered = function() {
  if (Session.get('goClass'))
    $(this.find('.show-picker')).val(Session.get('showName'))
}

Template.showLayout.rendered = function() {
  $('video.autoplayable').each(function() {
    $(this).get(0).play();
  });
}