// Assignment Code
var generateBtn = document.querySelector('#generate');

function getPwLength() {
  var lengthIsSet = false;
  while (lengthIsSet === false) {
    var pwLength = prompt('Enter length of desired password (8-128 characters)');
    pwLength = parseInt(pwLength);
    if (typeof pwLength === 'number' && 8 <= pwLength && pwLength <= 128) {
      lengthIsSet = true;
    } else {
      alert('Please enter a number between 8 and 128.');
    }
  }
  console.log(pwLength);
  return pwLength;
}

// Get all the information from the user and the possible sets of characters
function generatePassword() {
  var password = ''
  var possibleChars = []
  var lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var numberChars = ['1','2','3','4','5','6','7','8','9','0']
  var specialChars = ['!','@','#','$','%','^','&','*','(',')','-','=','_','+']
  
  // Array of all possible parts of the password
  var charsArr = [lowerChars, upperChars, numberChars, specialChars];
  
  // Get choices from the user
  var pwLength = getPwLength();

  var choicesArr = [
    confirm('Use lowercase letters in the password?'),
    confirm('Use uppercase letters in the password?'),
    confirm('Use numbers in the password?'),
    confirm('Use special characters in the password?'),
  ]
  console.log(choicesArr);

  // Populate the possible characters to choose from for the password
  for (var i=0; i < charsArr.length; i++) {
    console.log("Choices array: " + choicesArr[i]);
    if (choicesArr[i]) {
      possibleChars.push(charsArr[i]);
      console.log("New state of possibleChars: " + possibleChars);
    } else {
      // this should never happen
      console.log("Couldn't handle choice: " + choicesArr[i]);
    }
  }
  
  for (var i=1; i <= pwLength; i++) {
    nextChar = possibleChars[Math.floor(Math.random() * possibleChars.length)];
    password = password + nextChar;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
