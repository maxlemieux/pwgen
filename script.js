// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPwLength() {
  var lengthIsSet = false;
  while (lengthIsSet === false) {
    var pwLength = prompt("Enter length of desired password (8-128 characters)");
    pwLength = parseInt(pwLength);
    if (typeof pwLength === "number" && 8 <= pwLength && pwLength <= 128) {
      lengthIsSet = true;
    } else {
      alert("Please enter a number between 8 and 128.");
    }
  }
  console.log(pwLength);
  return pwLength;
}
function generatePassword() {
  var pwLength = getPwLength();
  var pwLowercase = confirm("Use lowercase letters in the password?");
  var pwUppercase = confirm("Use uppercase letters in the password?");
  var pwNumbers = confirm("Use numbers in the password?");
  var pwSpecialChar = confirm("Use special characters in the password?");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
