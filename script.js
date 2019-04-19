$(document).ready(function(){
  $("#firstName, #lastName").focus(function(){
  $("#firstName, #lastName").css('border', '1px solid green');
});
$("#firstName, #lastName").blur(function(){
$("#firstName, #lastName").css('border', '1px solid red');
});
});
