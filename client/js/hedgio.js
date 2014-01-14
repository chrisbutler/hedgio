Handlebars.registerHelper('withTemplate', function(name, context) {
  if (this.name)
    var context = {'name':this.name,'src':context};
  if ((name == 'mp4' && context.src != 'main') && Router.current().route.name != 'edit' &&  Router.current().route.name != 'theShow')
    name += 'Placeholder';
  return Template[name](context);
});

Handlebars.registerHelper('urlTemplate', function(name) {
  var n = Session.get(name);
  if (n == '')
    return '';
  var t = n.substring(n.length-3, n.length);
  return Template[t + 'URL'](n);
});

Handlebars.registerHelper('goClass', function(name, context) {
  return Session.get('goClass');
});

Handlebars.registerHelper('showName', function(name, context) {
  if (this.name)
    return this.name;
  return Session.get('showName') || 'default';
});

Handlebars.registerHelper('marquee', function(name, context) {
  var s = Shows.findOne({name: Session.get('showName')});
  return (s && s.text) || 'www.hedgeye.com';
});

Template.mp4.width = function() {
  if (this.size == 'large')
    return 960;
  return 480;
}

Template.mp4.height = function() {
  if (this.size == 'large')
    return 540;
  return 270;
}

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

Template.theShow.thirdScreen = function() {
  return this.number == 3;
}

Template.theShow.screenType = function() {
  var s = Shows.findOne({name: Session.get('showName')});
  return (s && s[this.src]) || this.type;
}

Template.theShow.rendered = function() {
  $('video.autoplayable').each(function() {
    $(this).get(0).play();
  });
}