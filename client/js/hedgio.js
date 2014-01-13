Handlebars.registerHelper('withTemplate', function(name, context) {
  if (this.name)
    var context = {'name':this.name,'src':context};
  if ((name == 'mp4' && context.src != 'main') && Router.current().route.name != 'edit' &&  Router.current().route.name != 'theShow')
    name += 'Placeholder';
  return Template[name](context);
});

Handlebars.registerHelper('goClass', function(name, context) {
  return Session.get('goClass');
});

Handlebars.registerHelper('showName', function(name, context) {
  if (this.name)
    return this.name;
  return Session.get('showName') || 'default';
});

Handlebars.registerHelper('marquee', function(name, context) {
  var s = Shows.findOne({name: Session.get('showName')});
  return (s && s.text) || 'www.hedgeye.com';
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
    if (Session.get('goClass'))
      Router.go('theShow');
  },
  'change .show-picker': function (event) {
    Session.set('goClass', 'btn-primary');
    Session.set('showName', event.target.selectedOptions[0].text);
  }
});

Template.screens.rendered = function() {
  
}

Template.screens.helpers({
  editing: function() {
    return Router.current().route.name == 'edit';
  }
});

Template.showPicker.rendered = function() {
  if (Session.get('goClass'))
    $(this.find('.show-picker')).val(Session.get('showName'))
}

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