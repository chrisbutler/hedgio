Screens = new Meteor.Collection("screens");

screenList = [
  {
    "code": "GEN1",
    "name": "chart loop",
    "sector": "generic",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GEN1.mp4"
  },
  {
    "code": "GEN2",
    "name": "charts",
    "sector": "generic",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GEN2.mp4"
  },
  {
    "code": "GEN3",
    "name": "numbers",
    "sector": "generic",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GEN2.mp4"
  },
  {
    "code": "GEN4",
    "name": "panning charts",
    "sector": "generic",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GEN4.mp4"
  },
  {
    "code": "GEN5",
    "name": "data",
    "sector": "generic",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GEN5.mp4"
  },
  {
    "code": "GEN6",
    "name": "gears",
    "sector": "generic",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GEN6.mp4"
  },
  {
    "code": "MAC1",
    "name": "globe pan",
    "sector": "macro",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/MAC1.mp4"
  },
  {
    "code": "MAC2",
    "name": "globe scope",
    "sector": "macro",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/MAC2.mp4"
  },
  {
    "code": "MAC3",
    "name": "globe spin",
    "sector": "macro",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/MAC3.mp4"
  },
  {
    "code": "MAC4",
    "name": "globe loop",
    "sector": "macro",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/MAC4.mp4"
  },
  {
    "code": "MAC5",
    "name": "map pan",
    "sector": "macro",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/MAC5.mp4"
  },
  {
    "code": "MAC6",
    "name": "globe flag",
    "sector": "macro",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/MAC6.mp4"
  },
  {
    "code": "MAC7",
    "name": "earth",
    "sector": "macro",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/MAC7.mp4"
  },
  {
    "code": "RET1",
    "name": "barcodes",
    "sector": "retail",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/RET1.mp4"
  },
  {
    "code": "HEA1",
    "name": "heatbeat",
    "sector": "healthcare",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/HEA1.mp4"
  },
  {
    "code": "GAM1",
    "name": "dice",
    "sector": "gaming",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GAM1.mp4"
  },
  {
    "code": "GAM2",
    "name": "casino sign",
    "sector": "gaming",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GAM2.mp4"
  },
  {
    "code": "GAM3",
    "name": "roulette",
    "sector": "gaming",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/GAM3.mp4"
  },
  {
    "code": "FIN1",
    "name": "burn dollar",
    "sector": "financials",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/FIN1.mp4"
  },
  {
    "code": "FIN2",
    "name": "print dollar",
    "sector": "financials",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/FIN2.mp4"
  },
  {
    "code": "FIN3",
    "name": "fed",
    "sector": "financials",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/FIN3.mp4"
  },
  {
    "code": "FIN4",
    "name": "flying dollar",
    "sector": "financials",
    "type": "video",
    "src": "http://hedgio.s3.amazonaws.com/videos/FIN4.mp4"
  }
];