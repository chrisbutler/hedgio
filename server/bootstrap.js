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
    "base": "http://hedgviz.s3.amazonaws.com/macro/",
    "src": 'main.jpg'
  },
  {
    "number": "2",
    "size": "medium",
    "type": "image",
    "base": "http://hedgviz.s3.amazonaws.com/macro/",
    "src": '1.jpg'
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
    "type": "image",
    "base": "http://hedgviz.s3.amazonaws.com/macro/",
    "src": '2.jpg'
  },
  {
    "number": "5",
    "size": "medium",
    "type": "image",
    "base": "http://hedgviz.s3.amazonaws.com/macro/",
    "src": '3.jpg'
  },
  {
    "number": "6",
    "size": "large",
    "type": "text",
    "src": 'MACRO MESSAGE'
  },
  {
    "number": "7",
    "size": "large",
    "type": "mp4",
    "base": "http://hedgviz.s3.amazonaws.com/default/",
    "src": "he-ns-loop-960"
  }
];