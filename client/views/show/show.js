Template.showPicker.events({
  'click .go': function (event) {
    if (Session.get('goClass'))
      Router.go('theShow', {name:Session.get('showName')});
  },
  'change .show-picker': function (event) {
    Session.set('goClass', 'btn-primary');
    Session.set('showName', event.target.selectedOptions[0].text);
  }
});

Template.showPicker.helpers({
  shows: function() {
    return Shows.find();
  }
});

Template.showPicker.rendered = function() {
  if (Session.get('goClass'))
    $(this.find('.show-picker')).val(Session.get('showName'));
}

Template.showLayout.rendered = function() {
  $('video.autoplayable').each(function() {
    $(this).get(0).play();
  });
}