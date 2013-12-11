if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Screens.find().count() === 0){
      var screens = screenList;
      for (screen in screens) {
        Screens.insert(screens[screen]);
      }
    }
  });
}

var screenList = [
  {
    "number": "1",
    "size": "large",
    "type": "mp4",
    "base": "http://hedgviz.s3.amazonaws.com/tickers/twtr/",
    "src": '1'
  },
  {
    "number": "2",
    "size": "medium",
    "type": "mp4",
    "base": "http://hedgviz.s3.amazonaws.com/default/",
    "src": 'chart-loop'
  },
  {
    "number": "3",
    "size": "medium",
    "type": "image",
    "base": "http://hedgviz.s3.amazonaws.com/",
    "src": 'HE_logo.jpg'
  },
  {
    "number": "4",
    "size": "medium",
    "type": "mp4",
    "base": "http://hedgviz.s3.amazonaws.com/default/",
    "src": 'charts'
  },
  {
    "number": "5",
    "size": "medium",
    "type": "mp4",
    "base": "http://hedgviz.s3.amazonaws.com/default/",
    "src": 'heartbeat'
  },
  {
    "number": "6",
    "size": "large",
    "type": "text",
    "src": 'TWTR - BEST IDEA - '
  },
  {
    "number": "7",
    "size": "large",
    "type": "mp4",
    "base": "http://hedgviz.s3.amazonaws.com/default/",
    "src": "he-ns-loop-960"
  }
];