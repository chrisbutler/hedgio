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

var showList = [
  {
    "name": "default",
    "main": "mp4",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "www.hedgeye.com"
  },
  {
    "name": "financials",
    "main": "jpg",
    "1": "jpg",
    "2": "jpg",
    "3": "jpg",
    "text": "financials"
  },
  {
    "name": "macro",
    "main": "mp4",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "macro"
  },
  {
    "name": "gaming",
    "main": "jpg",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "gaming"
  },
  {
    "name": "gold",
    "main": "mp4",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "gold"
  },
  {
    "name": "guest",
    "main": "jpg",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "guest"
  },
  {
    "name": "healthcare",
    "main": "jpg",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "healthcare"
  },
  {
    "name": "hedgetohedge",
    "main": "jpg",
    "1": "jpg",
    "2": "jpg",
    "3": "jpg",
    "text": "Hedge-to-Hedge"
  },
  {
    "name": "industrials",
    "main": "jpg",
    "1": "jpg",
    "2": "jpg",
    "3": "jpg",
    "text": "industrials"
  },
  {
    "name": "macro",
    "main": "jpg",
    "1": "jpg",
    "2": "jpg",
    "3": "jpg",
    "text": "macro"
  },
  {
    "name": "restaurants",
    "main": "jpg",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "restaurants"
  },
  {
    "name": "retail",
    "main": "jpg",
    "1": "jpg",
    "2": "jpg",
    "3": "jpg",
    "text": "retail"
  },
  {
    "name": "ticker: twtr",
    "main": "jpg",
    "1": "mp4",
    "2": "mp4",
    "3": "mp4",
    "text": "ticker: twtr"
  }
];

var screenList = [
  {
    "number": "1",
    "size": "large",
    "type": "mp4",
    "src": "main",
  },
  {
    "number": "2",
    "size": "medium",
    "type": "mp4",
    "src": "1"
  },
  {
    "number": "3",
    "size": "medium",
    "type": "jpg",
    "src": "HE_logo"
  },
  {
    "number": "4",
    "size": "medium",
    "type": "mp4",
    "src": "2"
  },
  {
    "number": "5",
    "size": "medium",
    "type": "mp4",
    "src": "3"
  },
  {
    "number": "6",
    "size": "large",
    "type": "text",
    "src": 'MACRO MESSAGE'
  }
];