var TAGS = TAGS || {};

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
      data: JSON.stringify({tag: data}),
      dataType: "json",
      contentType:"application/json",
      success: function (response) {
        console.log('POST CREATE success!');
        return response;
      }
    });
  };

  getPeople = function(data) {
    return $.ajax({
      url: "/people.json",
      success: function(response) {
        console.log(response)
        return response;
      },
      type: "GET"
    });
  }

  return {
    getTags: getTags,
    createTag: createTag,
    getPeople: getPeople
  };

})();
