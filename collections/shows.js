Shows = new Meteor.Collection("shows");

showList = [
  {
    "name": "generic",
    "screens": {
      "main": "G1",
      "one": "M1",
      "two": "M2",
      "three": "M3"
    },
    "ticker": "www.hedgeye.com"
  }
];


// var shows = [
//   {
//     "name": "default",
//     "main": "http://hedgviz.s3.amazonaws.com/default/main.mp4",
//     "one": "http://hedgviz.s3.amazonaws.com/default/one.mp4",
//     "two": "http://hedgviz.s3.amazonaws.com/default/two.mp4",
//     "three": "http://hedgviz.s3.amazonaws.com/default/three.mp4",
//      "ticker": "www.hedgeye.com"
//   },
//   {
//     "name": "financials",
//     "main": "http://hedgviz.s3.amazonaws.com/financials/main.jpg",
//     "one": "http://hedgviz.s3.amazonaws.com/financials/one.jpg",
//     "two": "http://hedgviz.s3.amazonaws.com/financials/two.jpg",
//     "three": "http://hedgviz.s3.amazonaws.com/financials/three.jpg",
//      "ticker": "financials"
//   },
//   {
//     "name": "macro",
//     "main": "http://hedgviz.s3.amazonaws.com/macro/main.mp4",
//     "one": "http://hedgviz.s3.amazonaws.com/macro/one.jpg",
//     "two": "http://hedgviz.s3.amazonaws.com/macro/two.jpg",
//     "three": "http://hedgviz.s3.amazonaws.com/macro/three.jpg",
//      "ticker": "macro"
//   },
//   {
//     "name": "gaming",
//     "main": "http://hedgviz.s3.amazonaws.com/gaming/main.jpg",
//     "one": "http://hedgviz.s3.amazonaws.com/gaming/one.mp4",
//     "two": "http://hedgviz.s3.amazonaws.com/gaming/two.mp4",
//     "three": "http://hedgviz.s3.amazonaws.com/gaming/three.mp4",
//      "ticker": "gaming"
//   },
//   {
//     "name": "gold",
//     "main": "http://hedgviz.s3.amazonaws.com/gold/main.mp4",
//     "one": "http://hedgviz.s3.amazonaws.com/gold/one.mp4",
//     "two": "http://hedgviz.s3.amazonaws.com/gold/two.mp4",
//     "three": "http://hedgviz.s3.amazonaws.com/gold/three.mp4",
//      "ticker": "gold"
//   },
//   {
//     "name": "healthcare",
//     "main": "http://hedgviz.s3.amazonaws.com/healthcare/main.jpg",
//     "one": "http://hedgviz.s3.amazonaws.com/healthcare/one.mp4",
//     "two": "http://hedgviz.s3.amazonaws.com/healthcare/two.mp4",
//     "three": "http://hedgviz.s3.amazonaws.com/healthcare/three.mp4",
//      "ticker": "healthcare"
//   },
//   {
//     "name": "hedgetohedge",
//     "main": "http://hedgviz.s3.amazonaws.com/hedgetohedge/main.jpg",
//     "one": "http://hedgviz.s3.amazonaws.com/hedgetohedge/one.jpg",
//     "two": "http://hedgviz.s3.amazonaws.com/hedgetohedge/two.jpg",
//     "three": "http://hedgviz.s3.amazonaws.com/hedgetohedge/three.jpg",
//      "ticker": "Hedge-to-Hedge"
//   },
//   {
//     "name": "industrials",
//     "main": "http://hedgviz.s3.amazonaws.com/industrials/main.jpg",
//     "one": "http://hedgviz.s3.amazonaws.com/industrials/one.jpg",
//     "two": "http://hedgviz.s3.amazonaws.com/industrials/two.jpg",
//     "three": "http://hedgviz.s3.amazonaws.com/industrials/three.jpg",
//      "ticker": "industrials"
//   },
//   {
//     "name": "restaurants",
//     "main": "http://hedgviz.s3.amazonaws.com/restaurants/main.jpg",
//     "one": "http://hedgviz.s3.amazonaws.com/restaurants/one.mp4",
//     "two": "http://hedgviz.s3.amazonaws.com/restaurants/two.mp4",
//     "three": "http://hedgviz.s3.amazonaws.com/restaurants/three.mp4",
//      "ticker": "restaurants"
//   },
//   {
//     "name": "retail",
//     "main": "http://hedgviz.s3.amazonaws.com/retail/main.jpg",
//     "one": "http://hedgviz.s3.amazonaws.com/retail/one.jpg",
//     "two": "http://hedgviz.s3.amazonaws.com/retail/two.jpg",
//     "three": "http://hedgviz.s3.amazonaws.com/retail/three.jpg",
//      "ticker": "retail"
//   }
// ];
