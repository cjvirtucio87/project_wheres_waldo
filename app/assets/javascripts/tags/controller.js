var TAGS = TAGS || {};

console.log(TAGS)

TAGS.controller = (function(model, view) {
  var init = function() {
    view.init({ tags: model.getTags, people: model.getPeople });
  };

  var sendTagBoxData = function (data) {
    model.createTag(data);
    console.log("this is firing");
  };

  return {
    init: init,
    sendTagBoxData: sendTagBoxData
  };
})(TAGS.model,TAGS.view);
