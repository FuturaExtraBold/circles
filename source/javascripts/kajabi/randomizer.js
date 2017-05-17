(function($) {

  function init() {
    var parent = $(".profiles");
    var divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    $(".profile").slice(12).remove();
    $(".profile").each(function(index) {
      console.log("name:", $(this).attr("data-name"));
    });
  }

  init();

})(jQuery);
