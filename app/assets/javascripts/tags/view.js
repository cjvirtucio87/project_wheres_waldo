TAGS = TAGS || {}

TAGS.view = (function($) {
  var _cacheDOM = function() {
    _$tagBox = $('#active')

  }

  mouseHoverListener = function() {
    $tagBox = $('#active')

    $("#waldo-img").on("mousemove", function(event) {


    $tagBox.removeClass("hidden")

    $tagBox.offset({
         left:  event.pageX - 50,
         top:   event.pageY - 35
      });
    });
  }

})($);