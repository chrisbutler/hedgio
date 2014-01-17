Meteor.startup(function() {
  AccountsEntry.config({
    showSignupCode: true,
    signupCode: 'theedge!23',
    defaultProfile: {
      role: 'media-producer'
    }
  });

  if (Meteor.users.find().count())
    Accounts.createUser({
      'email' : 'media@hedgeye.com',
      'password' : '10millionviews',
      'profile': {
        'name': 'Hedgeye Media'
      }
    })
});