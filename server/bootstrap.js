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
    "src": 'twitter.png'
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
    "src": 'HE_W_logo.png'
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
    "src": 'BEST IDEA - HEDGEYE | BEST IDEA - HEDGEYE | BEST IDEA - HEDGEYE | BEST IDEA - HEDGEYE | BEST IDEA - HEDGEYE | BEST IDEA - HEDGEYE | BEST IDEA - HEDGEYE | '
  },
  {
    "number": "7",
    "size": "large",
    "type": "mp4",
    "src": 'he-ns-loop-960.mp4'
  }
];