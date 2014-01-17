Template.youtube.helpers({
  params: function() {
    if (Router.current().route.name == 'theShow') {
      return '&loop=1&controls=0&autoplay=1&modestbranding=1&showinfo=0';
    } else {
      return '&controls=0&autoplay=0&modestbranding=1&showinfo=0';
    }
  }
});

Template.video.helpers({
  showThumbnail: function() {
    return Router.current().route.name != 'theShow';
  }
});

Template.ticker.helpers({
  tick: function() {
    var arr = [];
    for(var i = 0; i < 10; i++){
      arr.push(this.ticker);
    }
    return arr;
  }
});

Template.screensWidget.helpers({
  editing: function() {
    return Router.current().route.name == 'edit';
  },
  main: function() {
    var t = this;
    t.monitor = 'main';
    return t;
  },
  one: function() {
    var t = this;
    t.monitor = 'one';
    return t;
  },
  two: function() {
    var t = this;
    t.monitor = 'two';
    return t;
  },
  three: function() {
    var t = this;
    t.monitor = 'three';
    return t;
  }
});

Template.screenPicker.helpers({
  screens: function() {
    return Screens.find();
  }
});

Template.newScreen.helpers({
  code: function() {
    return (Session.get('selectedSector') || 'generic').substr(0,3) + '' + (Session.get('selectedNumber'));
  },
  graphicSet: function() {
    return Session.get('selectedSrc') != undefined;
  },
  theGraphic: function() {
    return {src:Session.get('selectedSrc')};
  },
  theType: function() {
    return Session.get('selectedType');
  }
});


Template.newScreen.events({
  'change .sector-picker': function (event) {
    Session.set('selectedSector', event.target.value);
  },
  'click .save-btn': function (event) {
    var c = (Session.get('selectedSector').substr(0,3) + '' + (Session.get('selectedNumber'))).toUpperCase();
    var n = $('#screen-name').val();
    Screens.insert({code:c, name:n, sector:Session.get('selectedSector'), type:Session.get('selectedType'), src:Session.get('selectedSrc')}, function(error, result) {
      console.log(error);
      console.log(result);
    });
    Session.set('selectedSrc', undefined);
    Router.go('screens');
  },
  'click .delete-button': function (event) {
    Session.set('selectedSrc', undefined);
  }
});

Template.newScreen.rendered = function() {
  $(this.find('.sector-picker')).val(Session.get('selectedSector') || 'placeholder');
}

Template.screensWidget.rendered = function() {
  var s = this.data;
  $('select').each(function(index) {
    $(this).val(s.screens[this.id] || 'placeholder');
  });
}
