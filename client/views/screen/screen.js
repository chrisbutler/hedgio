Template.ticker.helpers({
  tick: function() {
    return [0,1,2,3,4,5,6,7,8,9];
  }
});

Template.screensWidget.helpers({
  editing: function() {
    return Router.current().route.name == 'edit';
  }
});