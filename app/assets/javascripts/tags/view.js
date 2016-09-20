var TAGS = TAGS || {};

TAGS.view = (function($) {
  var _people, _tags, _clickedPerson;

  var init = function (data) {
    data.people().then(function(response) {
      _people = response;
      console.log(response);
    });
    _tags = data.tags();

    _cacheDOM();

    for(var l in _listeners) {
      _listeners[l]();
    }
  };

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
      _$selected = $("div").not(".permanent").last();

      // Make a new Box and append a list of names
      $newBox = _makeNewBox();
      _makePersonList($newBox);


      // Permanence upon clicking a name.
      _listeners.nameListener();
      _$selected.remove();

    },

    clickListName: function(event) {
      $("ul > li").slice(_people.length * -1).addClass("hidden");
      $(this).removeClass("hidden");
      $newBox.addClass("permanent");
      $newBox.append("<div class='x'>x</div>");
      _listeners.xListener();

      var tagBoxData = {
        id: $(event.target).data('person-id'),
        top: parseInt(_$selected.css('top')
            .substring(0, _$selected.css('top').length - 2)),
        left: parseInt(_$selected.css('left')
            .substring(0, _$selected.css('left').length - 2))
      };

      TAGS.controller.sendTagBoxData(tagBoxData)

    },

    xHandler: function(event) {
      $(event.target).parent().remove();
    }
  };

  var _listeners = {
    movingTag: function() {
      _$waldoImg.on("mousemove", _eventHandlers.movingTag);
    },

    clickImg: function () {
      _$waldoImg.on("click", _eventHandlers.clickImg);
    },

    nameListener: function() {
      $("ul > li").on("click", _eventHandlers.clickListName);
    },

    xListener: function() {
      $(".x").on("click", _eventHandlers.xHandler)
    }
  };

  var _makeNewBox = function () {
    _$container.append("<div class='tag-box'></div>");
    return $(".tag-box").last()
                        .css({
                           left:  event.pageX - 50,
                           top:   event.pageY - 35
                        });

  };

  var _makePersonList = function(newBox) {
    $ul = $("<ul class='box-list'></ul>");
    newBox.append($ul);

    // Need to get people data from the model.
    for(var person in _people) {
      $li = $("<li>" + _people[person].name + "</li>")
            .attr('data-person-id', _people[person].id);
      $ul.append($li);
    }
  };

  return {
    init: init
  }
})($);
