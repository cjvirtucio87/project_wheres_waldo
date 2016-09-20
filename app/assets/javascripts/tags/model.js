TAGS = TAGS || {};

TAGS.model = (function() {

  getTags = function() {
    return $.ajax({
      url: "/tags",
      success: function(response) { return response; },
      type: "GET"
    });
  };

  createTag = function(data) {
    return $.ajax({
      url: "/tags",
      type: "POST",
      data: JSON.stringify(data),
      dataType: "json",
      contentType:"application/json",
      success: function (response) {
        console.log('POST CREATE success!');
        return response;
      }
    });
  };

  return {
    getTags: getTags,
    createTag: createTag
  };

})();
