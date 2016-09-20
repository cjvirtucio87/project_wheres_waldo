TAGS = TAGS || {};

TAGS.view = (function($, people, tags) {
  var init = function (data) {
    _people = data.people();
    _tags = data.tags();
  };

  // data = {
  //   people: model.getPeople,
  //   taggs: model.getTags
  // };

  var _cacheDOM = function() {
    _$tagBox = $('#active');
    _$waldoImg = $("#waldo-img");
    _$container = $(".container");
  };

  var _eventHandlers = {
    movingTag: function(event) {
      _$tagBox.removeClass("hidden");
      _$tagBox.offset({
         left:  event.pageX - 50,
         top:   event.pageY - 35
      });
    },
    clickImg: function(event) {
      console.log("clicked!");
      $("div").not(".permanent").last().remove();
      // Difference from _$tagBox?
      _$container.append("<div class='tag-box'></div>");

      // Make a new Box and append a list of names
      $newBox = _makeNewBox();
      $ul = $("<ul class='box-list'></ul>");
      $newBox.append($ul);
      // Need to get people data from the model.


      // Permanence upon clicking a name.
      $("ul > li").on("click", _eventHandlers.clickListName);

      // for(var person in tags.getPeople()) {
      //   $ul.append(<li></li>)
      // }
    },
    clickListName: function() {
      $("ul > li").slice(-3).addClass("hidden");
      $(this).removeClass("hidden");
      $newBox.addClass("permanent");
      $newBox.append("<div class='x'>x</div>");

      $(".x").on("click", function(event) {
        $(this).parent().remove();
      });
    }
  };

  var _listeners = {
    movingTag: function() {
      _$waldoImg.on("mousemove", _eventHandlers.movingTag);
    },
    clickImg: function () {
      _$waldoImg.on("click", _eventHandlers.clickImg);
    }
  };

  var _makeNewBox = function () {
    return $(".tag-box").last()
                        .css({
                           left:  event.pageX - 50,
                           top:   event.pageY - 35
                        });
  };

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

})($, APP.controller.people, APP.controller.tags);
