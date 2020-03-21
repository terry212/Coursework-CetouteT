// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for password criteria 
// User defined criteria or auto criteria
generateBtn.addEventListener("click", function generatePassword() {
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  var pwCriteria = confirm("Please select password criteria");
  if (pwCriteria) {
    var pwLength = prompt("Please enter a character length between 8 and 128 characters.")
  } else {
    alert("You must click OK to proceed foward! Please click Generate Password and try again.");
    return;
  }
  
})
// creation of the generate password function
// prompt for password length; min = 8, max = 128





// prompt for character types
// lowercase, uppercase, numeric, and/or special characters



// validation & required field set

// generate password


// send alert or write to page