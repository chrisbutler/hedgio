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
    "main": "http://hedgviz.s3.amazonaws.com/default/main.mp4",
    "one": "http://hedgviz.s3.amazonaws.com/default/one.mp4",
    "two": "http://hedgviz.s3.amazonaws.com/default/two.mp4",
    "three": "http://hedgviz.s3.amazonaws.com/default/three.mp4",
    "text": "www.hedgeye.com"
  },
  {
    "name": "financials",
    "main": "http://hedgviz.s3.amazonaws.com/financials/main.jpg",
    "one": "http://hedgviz.s3.amazonaws.com/financials/one.jpg",
    "two": "http://hedgviz.s3.amazonaws.com/financials/two.jpg",
    "three": "http://hedgviz.s3.amazonaws.com/financials/three.jpg",
    "text": "financials"
  },
  {
    "name": "macro",
    "main": "http://hedgviz.s3.amazonaws.com/macro/main.mp4",
    "one": "http://hedgviz.s3.amazonaws.com/macro/one.mp4",
    "two": "http://hedgviz.s3.amazonaws.com/macro/two.mp4",
    "three": "http://hedgviz.s3.amazonaws.com/macro/three.mp4",
    "text": "macro"
  },
  {
    "name": "gaming",
    "main": "http://hedgviz.s3.amazonaws.com/gaming/main.jpg",
    "one": "http://hedgviz.s3.amazonaws.com/gaming/one.mp4",
    "two": "http://hedgviz.s3.amazonaws.com/gaming/two.mp4",
    "three": "http://hedgviz.s3.amazonaws.com/gaming/three.mp4",
    "text": "gaming"
  },
  {
    "name": "gold",
    "main": "http://hedgviz.s3.amazonaws.com/gold/main.mp4",
    "one": "http://hedgviz.s3.amazonaws.com/gold/one.mp4",
    "two": "http://hedgviz.s3.amazonaws.com/gold/two.mp4",
    "three": "http://hedgviz.s3.amazonaws.com/gold/three.mp4",
    "text": "gold"
  },
  {
    "name": "healthcare",
    "main": "http://hedgviz.s3.amazonaws.com/healthcare/main.jpg",
    "one": "http://hedgviz.s3.amazonaws.com/healthcare/one.mp4",
    "two": "http://hedgviz.s3.amazonaws.com/healthcare/two.mp4",
    "three": "http://hedgviz.s3.amazonaws.com/healthcare/three.mp4",
    "text": "healthcare"
  },
  {
    "name": "hedgetohedge",
    "main": "http://hedgviz.s3.amazonaws.com/hedgetohedge/main.jpg",
    "one": "http://hedgviz.s3.amazonaws.com/hedgetohedge/one.jpg",
    "two": "http://hedgviz.s3.amazonaws.com/hedgetohedge/two.jpg",
    "three": "http://hedgviz.s3.amazonaws.com/hedgetohedge/three.jpg",
    "text": "Hedge-to-Hedge"
  },
  {
    "name": "industrials",
    "main": "http://hedgviz.s3.amazonaws.com/industrials/main.jpg",
    "one": "http://hedgviz.s3.amazonaws.com/industrials/one.jpg",
    "two": "http://hedgviz.s3.amazonaws.com/industrials/two.jpg",
    "three": "http://hedgviz.s3.amazonaws.com/industrials/three.jpg",
    "text": "industrials"
  },
  {
    "name": "restaurants",
    "main": "http://hedgviz.s3.amazonaws.com/restaurants/main.jpg",
    "one": "http://hedgviz.s3.amazonaws.com/restaurants/one.mp4",
    "two": "http://hedgviz.s3.amazonaws.com/restaurants/two.mp4",
    "three": "http://hedgviz.s3.amazonaws.com/restaurants/three.mp4",
    "text": "restaurants"
  },
  {
    "name": "retail",
    "main": "http://hedgviz.s3.amazonaws.com/retail/main.jpg",
    "one": "http://hedgviz.s3.amazonaws.com/retail/one.jpg",
    "two": "http://hedgviz.s3.amazonaws.com/retail/two.jpg",
    "three": "http://hedgviz.s3.amazonaws.com/retail/three.jpg",
    "text": "retail"
  }
];

var screenList = [
  {
    "number": "1",
    "name": "main",
    "size": "large"
  },
  {
    "number": "2",
    "name": "one",
    "size": "medium"
  },
  {
    "number": "3",
    "name": "logo",
    "size": "medium",
    "src": "HE_logo.jpg"
  },
  {
    "number": "4",
    "name": "two",
    "size": "medium"
  },
  {
    "number": "5",
    "name": "three",
    "size": "medium",
  },
  {
    "number": "6",
    "name": "ticker",
    "size": "large",
    "src": ''
  },
  {
    "number": "7",
    "name": "multi",
    "size": "large",
    "src": '/multiloop.gif'
  }
];