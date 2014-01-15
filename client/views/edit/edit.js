Template.edit.events({
  'change .screen-picker': function (event) {
    var modifier = {$set: {}};
    modifier.$set['screens.' + event.target.id] = event.target.value;
    Shows.update(this._id, modifier, function(error, result) {
      console.log(error);
      console.log(result);
    });
  },
  'click .save-btn': function (event) {
    console.log($(event.target.offsetParent.parentNode).find('#ticker-text'));
    var t = $(event.target.offsetParent.parentNode).find('#ticker-text').val();
    Shows.update(this._id, {$set:{ticker:t}}, function(error, result) {
      console.log(error);
      console.log(result);
    });
    Router.go('shows');
  }
});