(function($) {

  var scaleTimeRange = 5000;
  var scaleAmountRange = 2;
  var jitterTimeRange = 5000;
  var jitterRange = 30;
  var movementSpeed = 1; // Lower is slower
  var cycleX = 1700;

  function init() {
    $(".circle").each(function(index) {
      $(this).velocity({
        "translateX": $(this).attr("data-x") + "px",
        "translateY": $(this).attr("data-y") + "px",
      }, 0);
      $(this).find(".circle__opacity").velocity({
        "opacity": "1",
      }, 1000);
      $(this).find(".circle__scale").velocity({
        "scale": $(this).attr("data-s"),
      }, 0);
      animateScale(this);
      animateJitter(this);
      animateMovement(this);
    });
  }

  function animateScale(circle) {
    $(circle).find(".circle__scale").velocity({
      "scale": (($(circle).attr("data-s") * 10) + (Math.random() * scaleAmountRange)) / 10,
    }, Math.ceil(Math.random() * (scaleTimeRange / 2) + (scaleTimeRange / 2)), function() {
      animateScale(circle);
    });
  }

  function animateJitter(circle) {
    $(circle).find(".circle__jitter").velocity({
      "translateX": -(jitterRange / 2) + (Math.random() * jitterRange),
      "translateY": -(jitterRange / 2) + (Math.random() * jitterRange),
    }, Math.ceil(Math.random() * (jitterTimeRange / 2) + (jitterTimeRange / 2)), function() {
      animateJitter(circle);
    });
  }

  function animateMovement(circle) {
    var newX = $(circle).attr("data-x") - movementSpeed;
    if (newX < -100) newX = cycleX;
    $(circle).velocity({
      "translateX": newX,
    }, 0);
    $(circle).velocity({
      "translateX": newX,
    }, 10, function() {
      animateMovement(circle);
    });
    $(circle).attr("data-x", newX);
  }

  init();

})(jQuery);
