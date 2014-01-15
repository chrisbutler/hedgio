if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Screens.find().count() === 0){
      var screens = screenList;
      for (screen in screens) {
        Screens.insert(screens[screen]);
      }
    }
    if(Shows.find().count() === 0){
      var shows = showList;
      for (show in shows) {
        Shows.insert(shows[show]);
      }
    }
  });
}
