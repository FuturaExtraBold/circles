(function($) {

  console.log("rad!");

  // Scaling
  var scaleTime;
  var scaleTimeRange = 3000;
  var scaleAmount;
  var scaleAmountRange = 0.25;

  // Jitter
  var jitterX;
  var jitterY;
  var jitterTime;
  var jitterTimeRange = 1500;
  var jitterRange = 10;

  function init() {
    $(".circle").each(function(index) {
      $(this).css({
        "left": $(this).attr("data-start-x") + "px",
        "top": $(this).attr("data-start-y") + "px",
        "scale": $(this).attr("data-start-s"),
      });
      $(this).find(".circle__opacity").velocity({
        "opacity": "1",
      }, 1000);
      animateScale(this);
      animateJitter(this);
      animateMovement(this);
    });
  }

  function animateScale(circle) {
    scaleTime = Math.ceil(Math.random() * (scaleTimeRange / 2) + (scaleTimeRange / 2));
    scaleAmount = Math.random() * scaleAmountRange + 1;
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
    var oldLeft = parseFloat($(circle).css("left"));
    $(circle).velocity({
      "left": oldLeft - 1
    }, 10, function() {
      animateMovement(circle);
    });
  }

  init();

})(jQuery);
