TAGS = TAGS || {}

TAGS.model = (function() {

  getTags = function() {
    return $.ajax({
      url: "/tags",
      success: function(response) { return response },
      type: "GET"
      })
  };

  createTag = function() {
    $.ajax({
      url: "/tags",
      success:
      type: "POST",
      data: getTagJSONData(),
      dataType: "json",
      contentType:"application/json"
    })
  };

  return {
    getTags: getTags,
  }

})();