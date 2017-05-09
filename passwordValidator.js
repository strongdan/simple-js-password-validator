//A function that verifies the password has an uppercase letter.
var hasUpperCase = function(input) {
  for (var i = 0, l = input.length; i < l; i++) {
    if (input[i] === input[i].toUpperCase()) {
    return true;
		}
  }
};

// A function that verifies the password has a lowercase letter.
var hasLowerCase = function(input) {
  for (var i = 0, l = input.length; i < l; i++) {
    if (input[i] === input[i].toLowerCase()) {
    return true;
		}
  }
};

// A function that verifies the password is at least 8 characters
var isLongEnough = function(input) {
  if (input.length >= 8) {
    return true;
  }
};

// A function that verifies the password has a special character.
var hasSpecialCharacter = function(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
        if (input[i] === specialCharacters[j]) {
            return true;
        }
    }
}
};

/* A function that reports to the user if their password is complex enough, and if not, tells them what they are missing. */
var isPasswordValid = function(input) {
  if (hasUpperCase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('This is a strong password');
}
  
  if (!hasUpperCase(input)) {
      console.log('Your password needs upper case letters');
      }
  
  if (!hasLowerCase(input)) {
      console.log('Your password needs lower case letters');
      }
  
  if (!isLongEnough(input)) {
      console.log('Your password should be at least eight characters long');
      }
  
  if (!hasSpecialCharacter(input)) {
      console.log('Your password needs special character(s)');
      }
};

isPasswordValid(prompt('Please enter a password to test:'));