Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404'
});

ScreenController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('screens')];
  }
});

ShowController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('shows'),Meteor.subscribe('screens')];
  }
});

ShowControllerAuth = ShowController.extend({
  before: function () {
    if (!Meteor.user()) {
      Router.go('entrySignIn');
      this.stop();
    }
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
    controller: 'ShowControllerAuth',
    data: function() {
      return Shows.find();
    }
  });

  this.route('shows', {
    path: '/shows',
    controller: 'ShowController',
    data: function() {
      return Shows.find();
    }
  });

  this.route('screens', {
    path: '/screens',
    controller: 'ScreenController',
    data: function() {
      return Screens.find();
    }
  });

  this.route('edit', {
    path: '/edit/:_id',
    controller: 'ShowControllerAuth',
    data: function() {
      var s = Shows.findOne(this.params._id);
      Session.set('main','http://hedgviz.s3.amazonaws.com/' + s.name + '/main.' + s.main);
      Session.set('one','http://hedgviz.s3.amazonaws.com/' + s.name + '/one.' + s.one);
      Session.set('two','http://hedgviz.s3.amazonaws.com/' + s.name + '/two.' + s.two);
      Session.set('three','http://hedgviz.s3.amazonaws.com/' + s.name + '/three.' + s.three);
      return s;
    }
  });

  this.route('delete', {
    path: '/delete/:_id',
    controller: 'ShowControllerAuth',
    data: function() {
      return Shows.findOne(this.params._id);
    }
  });

  this.route('theShow', {
    path: '/show/:name',
    controller: 'ShowController',
    layoutTemplate: 'showLayout',
    template: '1080p',
    before: function() {
      Session.set('showName', this.params.name);
    },
    data: function () {
      return Shows.findOne({name:this.params.name});
    }
  });

});
