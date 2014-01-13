Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404'
});

ScreenController = RouteController.extend({
  layoutTemplate: '1080p',
  waitOn: function () {
    return [Meteor.subscribe('screens')];
  }
});

ShowController = RouteController.extend({
  layoutTemplate: 'layout',
  waitOn: function () {
    return [Meteor.subscribe('shows')];
  },
  data: function() {
    return Shows.find();
  }
});

Router.map(function () {

  this.route('home', {
    path: '/',
    layoutTemplate: 'layout',
    controller: 'ShowController'
  });

  this.route('dashboard', {
    path: '/dashboard',
    controller: 'ShowController'
  });

  this.route('edit', {
    path: '/edit/:_id',
    controller: 'ShowController',
    data: function() {
      return Shows.findOne(this.params._id);
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
