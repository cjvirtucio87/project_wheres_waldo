tags = {

  mouseHoverListener: function() {
    $tagBox = $('#active')

    $("#waldo-img").on("mousemove", function(event) {


    $tagBox.removeClass("hidden")

    $tagBox.offset({
         left:  event.pageX - 50,
         top:   event.pageY - 35
      });
    });
  },

  addClickListener: function() {
    $("#waldo-img").on("click", function(event) {
      console.log("clicked!")
      $("div").not(".permanent").last().remove();

      $(".container").append("<div class='tag-box'></div>")

      $newBox = $(".tag-box").last();

      $newBox.css({
         left:  event.pageX - 50,
         top:   event.pageY - 35
      });

      $ul = $("<ul class='box-list'></ul>")
      $newBox.append($ul)

      // for(var person in tags.getPeople()) {
      //   $ul.append(<li></li>)
      // }

      $("ul > li").on("click", function() {
        $("ul > li").slice(-3).addClass("hidden");
        $(this).removeClass("hidden");
        $newBox.addClass("permanent");
        $newBox.append("<div class='x'>x</div>");

        $(".x").on("click", function(event) {
          $(this).parent().remove();
        });

      });
    })
  },

  getPeople: function() {
    $.ajax({url: "/people", success: function(response) { return response } })
  }
}

$(document).ready(function() {
  tags.mouseHoverListener();
  tags.addClickListener();
});



// $("#image").on("mouseleave", function(event) {
//   $tagBox.addClass("hidden")
// });

