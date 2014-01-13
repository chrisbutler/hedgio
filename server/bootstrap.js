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
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "www.hedgeye.com"
  },
  {
    "name": "financials",
    "main": "jpg",
    "one": "jpg",
    "two": "jpg",
    "three": "jpg",
    "text": "financials"
  },
  {
    "name": "macro",
    "main": "mp4",
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "macro"
  },
  {
    "name": "gaming",
    "main": "jpg",
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "gaming"
  },
  {
    "name": "gold",
    "main": "mp4",
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "gold"
  },
  {
    "name": "guest",
    "main": "jpg",
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "guest"
  },
  {
    "name": "healthcare",
    "main": "jpg",
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "healthcare"
  },
  {
    "name": "hedgetohedge",
    "main": "jpg",
    "one": "jpg",
    "two": "jpg",
    "three": "jpg",
    "text": "Hedge-to-Hedge"
  },
  {
    "name": "industrials",
    "main": "jpg",
    "one": "jpg",
    "two": "jpg",
    "three": "jpg",
    "text": "industrials"
  },
  {
    "name": "macro",
    "main": "jpg",
    "one": "jpg",
    "two": "jpg",
    "three": "jpg",
    "text": "macro"
  },
  {
    "name": "restaurants",
    "main": "jpg",
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "restaurants"
  },
  {
    "name": "retail",
    "main": "jpg",
    "one": "jpg",
    "two": "jpg",
    "three": "jpg",
    "text": "retail"
  },
  {
    "name": "tickers/twtr",
    "main": "mp4",
    "one": "mp4",
    "two": "mp4",
    "three": "mp4",
    "text": "eye on $twtr"
  }
];

var screenList = [
  {
    "number": "one",
    "size": "large",
    "type": "mp4",
    "src": "main",
  },
  {
    "number": "two",
    "size": "medium",
    "type": "mp4",
    "src": "one"
  },
  {
    "number": "three",
    "size": "medium",
    "type": "jpg",
    "src": "HE_logo"
  },
  {
    "number": "4",
    "size": "medium",
    "type": "mp4",
    "src": "two"
  },
  {
    "number": "5",
    "size": "medium",
    "type": "mp4",
    "src": "three"
  },
  {
    "number": "6",
    "size": "large",
    "type": "text",
    "src": 'MACRO MESSAGE'
  }
];