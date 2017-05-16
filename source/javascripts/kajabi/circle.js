(function($) {

  console.log("rad!");

  // Scaling
  var scaleTime;
  var scaleTimeRange = 5000;
  var scaleAmount;
  var scaleAmountRange = 1;

  // Jitter
  var jitterX;
  var jitterY;
  var jitterTime;
  var jitterTimeRange = 5000;
  var jitterRange = 30;

  // Movement
  var movementSpeed = 0.4; // Lower is slower

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
    scaleTime = Math.ceil(Math.random() * (scaleTimeRange / 2) + (scaleTimeRange / 2));
    scaleAmount = (($(circle).attr("data-s") * 10) + (Math.random() * scaleAmountRange)) / 10;
    $(circle).find(".circle__scale").velocity({
      "scale": scaleAmount,
    }, scaleTime, function() {
      animateScale(circle);
    });
  }

  function animateJitter(circle) {
    jitterX = -(jitterRange / 2) + (Math.random() * jitterRange);
    jitterY = -(jitterRange / 2) + (Math.random() * jitterRange);
    jitterTime = Math.ceil(Math.random() * (jitterTimeRange / 2) + (jitterTimeRange / 2));
    $(circle).find(".circle__jitter").velocity({
      "translateX": jitterX,
      "translateY": jitterY,
    }, jitterTime, function() {
      animateJitter(circle);
    });
  }

  function animateMovement(circle) {
    var newX = $(circle).attr("data-x") - movementSpeed;
    if (newX < -100) newX = 1700;
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
