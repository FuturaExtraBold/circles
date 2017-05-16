(function($) {

  console.log("rad!");

  var $circle = $(".circle");
  var $circleSize = $(".circle__size");
  var $circleMove = $(".circle__move");

  var updatedValues;

  // Scaling
  var scaleTime;
  var scaleTimeRange = 1000;
  var scaleAmount;
  var scaleAmountRange = 0.5;

  // Movement
  var horzMove;
  var vertMove;
  var moveRange = 40;
  var movementTime = 1500;

  function initCircles() {
    $circle.each(function(index) {
      $(this).velocity({
        "left": $(this).attr("data-start-x") + "px",
        "top": $(this).attr("data-start-y") + "px",
        "scale": $(this).attr("data-start-s"),
      }, 0);
      $(this).velocity({
        "opacity": "1",
      }, 1000);
      animateScale(this);
      animateMovement(this);
    });
  }

  function animateScale(circle) {
    scaleTime = Math.ceil(Math.random() * (scaleTimeRange / 2) + (scaleTimeRange / 2));
    scaleAmount = Math.random() * scaleAmountRange + 1;
    $(circle).find(".circle__size").velocity({
      "scale": scaleAmount,
    }, scaleTime, function() {
      animateScale(circle);
    });
  }

  function animateMovement(circle) {

  }

  function update() {
    return {
      tS: Math.ceil(Math.random() * (sizeTime / 2) + (sizeTime / 2)),
      tM: Math.ceil(Math.random() * (movementTime / 2) + (movementTime / 2)),
      mX: -(moveRange / 2) + (Math.random() * moveRange),
      mY: -(moveRange / 2) + (Math.random() * moveRange),
      sA: Math.random() * sizeRange + 1,
    };
  }

  /*
  var sizing = setInterval(function() {
    $circleSize.each(function(index) {
      scaleAmount = Math.random() * sizeRange + 1;
      $(this).velocity({
        "scale": scaleAmount,
      }, sizeTime);
    });
  }, sizeTime);

  var movement = setInterval(function() {
    $circleMove.each(function(index) {
      horzMove = -(moveRange / 2) + (Math.random() * moveRange);
      vertMove = -(moveRange / 2) + (Math.random() * moveRange);
      //console.log("vertMove:", vertMove, "horzMove:", horzMove);
      $(this).velocity({
        "translateX": horzMove,
        "translateY": vertMove,
      }, movementTime);
    });
  }, movementTime);
  */

  initCircles();

})(jQuery);
