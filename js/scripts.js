var alphaNumChar = /[a-zA-Z0-9]/;
var squareSize;

var encryptedMessage = function(unencryptedArray) {
  var encryptedArray = [];
  for (i = 0; encryptedArray.length < unencryptedArray.length; i++) {
    for (j = 0; j < (unencryptedArray.length) ; j += squareSize) {
      encryptedArray.push(unencryptedArray[i + j]);
    };
  };
  var encryptedString = encryptedArray.join("").match(/.{1,5}/g).join(" ");
  var encryptedSentence = encryptedString.match(/.{1,5}/g).join(" ")
  return encryptedString;
};

var cryptoSquarer = function(input) {
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
  return finalMessage
};

$(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#text-input").val();
    var output = cryptoSquarer(userInput);
    $("#output-msg").text(output);
  });
});
