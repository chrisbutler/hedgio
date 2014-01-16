Handlebars.registerHelper('lowercase', function(s) {
  return s.toLowerCase();
});

Handlebars.registerHelper('width', function() {
  // if (this.type = 'youtube');
  //   return '960';
  return '100%';
});

Handlebars.registerHelper('height', function() {
  // if (this.type = 'youtube');
  //   return '540';
  return '100%';
});

Handlebars.registerHelper('theSectors', function() {
  return ['Macro','Energy','Financials','Gaming','Industrials','Retail','Restaurants', 'Healthcare', 'Internet'];
});

Handlebars.registerHelper('goClass', function() {
  return Session.get('goClass');
});

Handlebars.registerHelper('screenTemplate', function(name, p) {
  var screen = Screens.findOne({code:this.screens[name]});
  if (!screen)
    return Template.placeholder();
  var t = screen.type;
  if (p == false && t == 'video')
    t += 'Placeholder';
  if (screen)
    return Template[t](screen);
});

Handlebars.registerHelper('withTemplate', function(type) {
  return Template[type](this);
});

Handlebars.registerHelper('screenPicker', function(name) {
  return Template.screenPicker(name);
});
