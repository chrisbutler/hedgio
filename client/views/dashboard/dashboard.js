Template.edit.events({
  'click .image-button': function (event) {
    filepicker.pickAndStore(
      {
        mimetypes: ['image/*'],
        services:['COMPUTER','URL', 'IMAGE_SEARCH'],
      },{

      },
      function(InkBlobs){
        console.log(JSON.stringify(InkBlobs));
      }  
    );
  },
  'click .video-button': function (event) {
    filepicker.pickAndStore(
      {
        mimetypes: ['video/mp4'],
        services:['COMPUTER'],
      },{

      },
      function(InkBlobs){
        console.log(JSON.stringify(InkBlobs));
      }  
    );
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

Template.navigation.rendered = function () {
  $('.highlight-nav .active').removeClass('active');
  $('.highlight-nav .' + Router.current().route.name + '-link').addClass('active');
}

Template.sectorNav.helpers({
  sectors: function() {
    return ['Macro','Energy','Financials','Gaming','Industrials','Retail','Restaurants'];
  }
});

// Template.editorBar.helpers({
//   sectors: function() {
    
//   }
// });