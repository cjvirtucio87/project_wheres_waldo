var TAGS = TAGS || {};

TAGS.controller = (function(model, view) {
  var init = function() {
    view.init({ tags: model.getTags, people: model.getPeople });
  };

  var sendTagBoxData = function (data) {
    model.createTag(data);
  };

  return {
    init: init,
    sendTagBoxData: sendTagBoxData,
    getTags: getTags
  };
})(TAGS.model,TAGS.view);
