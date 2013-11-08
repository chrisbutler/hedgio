if (Meteor.isClient) {
  Template.screens.screen = function() {
    return Screens.find();
  }

  Handlebars.registerHelper('withTemplate', function(name, context) {
    return Template[name](context);
  });

}