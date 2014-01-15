Template.ticker.helpers({
  tick: function() {
    return [0,1,2,3,4,5,6,7,8,9];
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

Template.screensWidget.rendered = function() {
  var s = this.data;
  $('select').each(function(index) {
    $(this).val(s.screens[this.id]);
  });
}
