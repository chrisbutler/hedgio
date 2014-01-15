Template.edit.events({
  'click .picker-button': function (event) {
    filepicker.pickAndStore({},{},function(InkBlobs){
      console.log(JSON.stringify(InkBlobs));
    });
  },
  'click .yt-button': function (event) {
    bootbox.prompt("Enter YouTube URL:", function(result) {                
      if (result === null) {                                             
        console.log("Nevermind...");                              
      } else {
        console.log(result.replace(/.*v=(.*)/,"$1"));                          
      }
    });
  },
  'click .remove-img-button': function (event) {
    Session.set('main', '');
  } 
});
