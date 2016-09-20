TAGS = TAGS || {};

TAGS.controller = (function() {
  var init = function() {
    TAGS.view.init({ tags: TAGS.model.getTags, people: TAGS.model.getPeople })
  }
})();