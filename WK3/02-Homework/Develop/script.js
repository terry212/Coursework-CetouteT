// Assignment Code
var generateBtn = document.querySelector("#generate");
// min/max (mm) validation of user input


// Prompt for password criteria 
// User defined criteria or auto criteria
// creation of the generate password function

generateBtn.addEventListener("click", function generatePassword() {
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  var pwCriteria = confirm("Please select password criteria");
  if (pwCriteria) {
    // prompt for password length; min = 8, max = 128
    var pwLength = prompt("Please enter a character length between 8 and 128 characters.")
    if (pwLength > 8 && pwLength < 128) {
      var pwLengthValidation = true;
    } else {
      alert("Invalid Entry. Please try again using a length between 8 and 128  characters.");
      var pwLengthValidation = false;
      return;
    }
  } else {
    alert("You must click OK to proceed foward! Please click Generate Password and try again.");
    return;
  }

//   WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
  if (pwLengthValidation == true) {
var charTypes = ["lowercase", "uppercase", "numeric", "special characters"];
    
  } else {
    
  }

});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// prompt for character types
// lowercase, uppercase, numeric, and/or special characters



// validation & required field set

// generate password


// send alert or write to page