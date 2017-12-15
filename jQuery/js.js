$("#launch").click(function(){
  $("#rocket4").addClass("animated bounceOutUp");
});
$("#fireRed").click(function(){
  $("#rocket2").css("color",  "red");
});
$("#peekaboo").click(function(){
  $("#rocket1").hide();
});
$("#spaceShuttle").click(function(){
  $("#rocket3").removeClass("fa-rocket");
  $("#rocket3").addClass("fa-space-shuttle");

});
