Meteor.startup(function() {
  Meteor.setTimeout(function(){
    filepicker.setKey("AQXb7iOxFTKu0sLBAd2W5z");
  },1000);
  
  Session.setDefault('showName', 'generic');
  Session.setDefault('selectedSector', null);

  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });
  
  AccountsEntry.config({
    logo: 'hedgio-logo.png',
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    profileRoute: 'profile',
    showSignupCode: true
  });

});
