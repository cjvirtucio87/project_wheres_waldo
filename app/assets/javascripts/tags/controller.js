TAGS = TAGS || {};

TAGS.controller = (function(model, view) {
  var init = function() {
    view.init({ tags: model.getTags, people: model.getPeople });
  };
})(TAGS.model,TAGS.view);
