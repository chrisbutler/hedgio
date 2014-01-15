Template.showPicker.events({
  'click .go': function (event) {
    if (Session.get('goClass'))
      Router.go('theShow', {name:Session.get('showName')});
  },
  'change .show-picker': function (event) {
    Session.set('goClass', 'btn-primary');
    Session.set('showName', event.target.selectedOptions[0].text);
  }
});

Template.screens.rendered = function() {
  
}

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



Template.screens.helpers({
  editing: function() {
    return Router.current().route.name == 'edit';
  }
});

Template.showPicker.rendered = function() {
  if (Session.get('goClass'))
    $(this.find('.show-picker')).val(Session.get('showName'))
}

// Template.theShow.rendered = function() {
//   $('video.autoplayable').each(function() {
//     $(this).get(0).play();
//   });
// }