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
    "type": "image",
    "src": 'main.jpg'
  },
  {
    "number": "2",
    "size": "medium",
    "type": "image",
    "src": '1.jpg'
  },
  {
    "number": "3",
    "size": "medium",
    "type": "image",
    "src": 'HE_logo.jpg'
  },
  {
    "number": "4",
    "size": "medium",
    "type": "image",
    "src": '3.jpg'
  },
  {
    "number": "5",
    "size": "medium",
    "type": "image",
    "src": '2.jpg'
  },
  {
    "number": "6",
    "size": "large",
    "type": "text",
    "src": 'WWW.HEDGEYE.COM'
  },
  {
    "number": "7",
    "size": "large",
    "type": "mp4",
    "src": 'http://hedgviz.s3.amazonaws.com/video/he-ns-loop-960.mp4'
  }
];