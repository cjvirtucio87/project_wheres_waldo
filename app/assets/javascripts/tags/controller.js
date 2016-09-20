var TAGS = TAGS || {};

console.log(TAGS)

TAGS.controller = (function(model, view) {
  var init = function() {
    view.init({ tags: model.getTags, people: model.getPeople });
  };

  return {
    init: init
  }
})(TAGS.model,TAGS.view);
