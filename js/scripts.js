var alphaNumChar = /[a-zA-Z0-9]/;

var cryptoMsg = function(input) {
  var removeCaps = input.toLowerCase();
  var inputLetterArray = removeCaps.split("");
  var outputArray = [];
  inputLetterArray.forEach(function(letter) {
    if (alphaNumChar.test(letter)) {
      outputArray.push(letter);
    };
  })
  console.log(outputArray.length);
  var squareSize = Math.ceil(Math.sqrt(outputArray.length));
  console.log(squareSize);
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
