Handlebars.registerHelper('withTemplate', function(name, context) {
  return Template[name](context);
});

Handlebars.registerHelper('goClass', function(name, context) {
  return Session.get('goClass');
});

Handlebars.registerHelper('showName', function(name, context) {
  return Session.get('showName') || 'default';
});

Handlebars.registerHelper('marquee', function(name, context) {
  return Session.get('showName') || 'www.hedgeye.com';
});

Template.mp4.width = function() {
  if (this.size == 'large')
    return 960;
  return 480;
}

Template.mp4.height = function() {
  if (this.size == 'large')
    return 540;
  return 270;
}

Template.showPicker.events({
  'click .go': function (event) {
    Router.go('theShow');
  },
  'change .show-picker': function (event) {
    Session.set('goClass', 'btn-success');
    Session.set('showName', event.target.selectedOptions[0].text);
  }
});

Template.theShow.thirdScreen = function() {
  return this.number == 3;
}

Template.theShow.screenType = function() {
  var s = Shows.findOne({name: Session.get('showName')});
  return (s && s[this.src]) || this.type;
}

Template.theShow.rendered = function() {
  $('video.autoplayable').each(function() {
    $(this).get(0).play();
  });
}