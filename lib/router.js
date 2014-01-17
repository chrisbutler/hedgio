Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404'
});

AuthController = RouteController.extend({
  before: function () {
    // if (!Meteor.user() && !Meteor.loggingIn()) {
    //   Router.go('entrySignIn');
    //   this.stop();
    // }
  }
});

ScreenController = AuthController.extend({
  waitOn: function () {
    return [Meteor.subscribe('screens')];
  }
});

ShowController = AuthController.extend({
  waitOn: function () {
    return [Meteor.subscribe('shows'),Meteor.subscribe('screens')];
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
    controller: 'ShowController',
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
      //var s = Screens.find({sector:Session.get('selectedSector')});
      return Screens.find();
    }
  });

  this.route('newShow', {
    path: '/shows/new',
    controller: 'ShowController',
    data: function() {
      return Shows.find();
    },
    action: function() {
      bootbox.prompt("Enter Show Name", function(result) {                
        if (result === null) {                                             
          console.log("Nevermind...");                           
        } else {
          Shows.insert({
            name: result,
            screens: {
              main: null,
              one: null,
              two: null,
              three: null
            }
            }, 
            function(error, result) {
            if (result)
              Router.go('edit', {_id: result});
          });
        }
      });
    }
  });

  this.route('newScreen', {
    path: '/screens/new',
    controller: 'ScreenController',
    before: function() {
    },
    data: function() {
      var s = Screens.find({sector:(Session.get('selectedSector') || 'generic')});  
      console.log(s);
      Session.set('selectedNumber', s.fetch().length + 1);
      return s;
    }
  });

  this.route('edit', {
    path: '/edit/:_id',
    controller: 'ShowController',
    data: function() {
      var s = Shows.findOne(this.params._id);
      return s;
    }
  });

  this.route('delete', {
    path: '/delete/:_id',
    controller: 'ShowController',
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
