var alphaNumChar = /[a-zA-Z0-9]/;
var squareSize;

var encryptedMessage = function(unencryptedArray) {
  var encryptedArray = [];
  for (var i = 0; encryptedArray.length <= unencryptedArray.length; i++) {
    for (index = 0; index < unencryptedArray.length; index++) {
      var counter = index;
      debugger;
      encryptedArray.push(unencryptedArray[counter]);

    };
  };
  console.log(encryptedArray);
  return encryptedArray;
};

var cryptoMsg = function(input) {
  var removeCaps = input.toLowerCase();
  var inputLetterArray = removeCaps.split("");
  var outputArray = [];
  inputLetterArray.forEach(function(letter) {
    if (alphaNumChar.test(letter)) {
      outputArray.push(letter);
    };
  });
  squareSize = Math.ceil(Math.sqrt(outputArray.length));

  var finalMessage = encryptedMessage(outputArray);
  console.log(finalMessage);
};









// Front end logic
$(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#text-input").val();
    var output = cryptoMsg(userInput);
    $("#output-msg").text(output);
  });
});
