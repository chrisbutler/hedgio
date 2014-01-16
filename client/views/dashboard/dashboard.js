Template.typeSelector.events({
  'click .image-button': function (event) {
    filepicker.pickAndStore(
      {
        multiple: false,
        mimetypes: ['image/*'],
        services:['COMPUTER','URL', 'IMAGE_SEARCH'],
      },{

      },
      function(InkBlobs){
        Session.set('selectedType', 'image');
        Session.set('selectedSrc', InkBlobs[0].url);
        console.log(JSON.stringify(InkBlobs));
      }  
    );
  },
  'click .video-button': function (event) {
    filepicker.pickAndStore(
      {
        multiple: false,
        mimetypes: ['video/mp4'],
        services:['COMPUTER'],
      },{

      },
      function(InkBlobs){
        Session.set('selectedType', 'video');
        Session.set('selectedSrc', InkBlobs[0].url);
        console.log(JSON.stringify(InkBlobs));
      }  
    );
  },
  'click .yt-button': function (event) {
    bootbox.prompt("Enter YouTube URL:", function(result) {                
      if (result === null) {                                             
        console.log("Nevermind...");                              
      } else {
        Session.set('selectedType', 'youtube');
        Session.set('selectedSrc', result.replace(/.*v=(.*)/,"$1"));
      }
    });
  }
});

Template.navigation.rendered = function () {
  $('.highlight-nav .active').removeClass('active');
  $('.highlight-nav .' + Router.current().route.name + '-link').addClass('active');
}

Template.navigation.events({
  'click .view-show-link': function (event) {
    if (Session.get('goClass')) {
      Router.go('theShow', {name:Session.get('showName')});
    } else {
      Router.go('dashboard');
    }
  }
});