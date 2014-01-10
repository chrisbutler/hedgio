if (Meteor.isClient) {
  Handlebars.registerHelper('withTemplate', function(name, context) {
    return Template[name](context);
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

}