var cryptoMsg = function(input) {
  var removeCaps = input.toLowerCase();
  return removeCaps;
}









// Front end logic
$(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#text-input").val();
    var output = cryptoMsg(userInput);
    $("#output-msg").text(output);
  });
});
