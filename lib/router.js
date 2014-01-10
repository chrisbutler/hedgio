Router.configure({
  notFoundTemplate: '404'
});

ScreenController = RouteController.extend({
  layoutTemplate: '1080p',
  waitOn: function () {
    return [Meteor.subscribe('screens')];
  }
});

Router.map(function () {

  this.route('home', {
    path: '/',
    data: function() {
      return Shows.find();
    }
  });

  this.route('theShow', {
    path: '/show',
    controller: 'ScreenController',
    data: function() {
      return Screens.find({},{sort: {'number': 1}});
    }
  });

});
