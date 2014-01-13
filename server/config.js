Meteor.startup(function() {
  AccountsEntry.config({
    showSignupCode: true,
    signupCode: 'theedge!23',
    defaultProfile: {
      role: 'media-producer'
    }
  });
});