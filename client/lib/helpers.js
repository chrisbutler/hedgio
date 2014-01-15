Handlebars.registerHelper('width', function(name, context) {
  if (this.size == 'large')
    return 960;
  return 480;
});

Handlebars.registerHelper('height', function(name, context) {
  if (this.size == 'large')
    return 540;
  return 270;
});

Handlebars.registerHelper('goClass', function(name, context) {
  return Session.get('goClass');
});

Handlebars.registerHelper('screenTemplate', function(name) {
  var screen = Screens.findOne({code:this.screens[name]})
  if (screen)
    return Template[screen.type](this);
});