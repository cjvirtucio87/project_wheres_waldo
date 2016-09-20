var TAGS = TAGS || {};

TAGS.model = (function() {

  var getTags = function() {
    return $.ajax({
      url: "/tags",
      success: function(response) { return response; },
      type: "GET"
    });
  };

  var createTag = function(data) {
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

  var getPeople = function(data) {
    return $.ajax({
      url: "/people.json",
      success: function(response) {
        return response;
      },
      type: "GET"
    });
  };

  var destroyTag = function(tagID) {
     return $.ajax({
       url: ['/tag/',tagID].join(''),
       type: 'POST',
       dataType: 'json',
       data: JSON.stringify({_method: 'delete'}),
       contentType: 'application/json',
       success: function (response) {
         console.log("Tag deleted");
       }
     });
   };


  return {
    getTags: getTags,
    createTag: createTag,
    getPeople: getPeople
  };

})();
