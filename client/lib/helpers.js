Handlebars.registerHelper('width', function() {
  console.log(this);
  if (this.size == 'large')
    return 960;
  return '100%';
});

Handlebars.registerHelper('height', function() {
  if (this.size == 'large')
    return 540;
  return '100%';
});

Handlebars.registerHelper('goClass', function() {
  return Session.get('goClass');
});

Handlebars.registerHelper('screenTemplate', function(name) {
  var screen = Screens.findOne({code:this.screens[name]})
  if (screen)
    return Template[screen.type](screen);
});