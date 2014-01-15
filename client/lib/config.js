Meteor.startup(function() {
  Meteor.setTimeout(function(){
    filepicker.setKey("AQXb7iOxFTKu0sLBAd2W5z");
  },1000);
  
  Session.setDefault('showName', 'generic');

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

// send sign-in url, use theedge!23 as secret code
// use cropper and filepicker
// bootstrap pill buttons to select type
// image, mp4, url(?)
// 63632374
// hardcode screen layout
// array of screens?
// server sessions for remote control