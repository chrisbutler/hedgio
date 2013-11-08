Screens = new Meteor.Collection("screens");

if (Meteor.isClient) {
  Template.screens.screen = function() {
    return Screens.find();
  }
}

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
    "src": '<img src="twitter.png" />'
  },
  {
    "number": "2",
    "size": "medium",
    "type": "image",
    "src": '<img src="1.jpg" />'
  },
  {
    "number": "3",
    "size": "medium",
    "type": "image",
    "src": '<img src="HE_W_logo.png" />'
  },
  {
    "number": "4",
    "size": "medium",
    "type": "image",
    "src": '<iframe width="480" height="270" src="//www.youtube.com/embed/FurB-_vx0Rk?playlist=FurB-_vx0Rk&loop=1&controls=0&autoplay=1&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'
  },
  {
    "number": "5",
    "size": "medium",
    "type": "image",
    "src": '<img src="2.jpg" />'
  },
  {
    "number": "6",
    "size": "large",
    "type": "text",
    "src": "<div class='ticker'><marquee behavior='alternate' direction='left'>BLACK BOOK - HEDGEYE | BLACK BOOK - HEDGEYE | BLACK BOOK - HEDGEYE | BLACK BOOK - HEDGEYE | BLACK BOOK - HEDGEYE | BLACK BOOK - HEDGEYE | BLACK BOOK - HEDGEYE | </marquee></div>"
  },
  {
    "number": "7",
    "size": "large",
    "type": "mp4",
    "src": '<video width="960" height="540" autoplay loop><source src="he-ns-loop-960.mp4" type="video/mp4"></video>'
  }
];