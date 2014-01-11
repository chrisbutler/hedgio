Meteor.startup(function() {
  
  Session.setDefault('showName', 'default');

  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });
  
  AccountsEntry.config({
    logo: 'hedgio-logo.png',
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    profileRoute: 'profile',
  });

});
