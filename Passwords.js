/*****************************************************************************************
For this assignment, you will need to validate the password input boxes from a webpage.  
When focus leaves the second box, your script checks to make sure the values of both 
boxes are the same and not empty (5 points). Note: A lot of examples on the Internet 
use the html input onchange property in the html file to call the event handler.  
Do not use any html property of of any type to handle events.  Instead, define an event 
listener in your .js file (5 points).

If they're not the same, display a message saying that a second try is needed and 
reset the focus in the first password box.If they are the same, replace any previous 
error messages with a message saying the passwords match.
*****************************************************************************************/

var passwordField = document.getElementById("txtPassword");
var verifyField = document.getElementById("txtPWVerified");

verifyField.addEventListener("blur", checkPasswords);

function checkPasswords()
{
  if(passwordField.value == "" || verifyField.value == "")
  {
    alert("Please enter both passwords!");
    passwordField.focus();
  }
  else if(passwordField.value != verifyField.value)
  {
    alert("The passwords do not match!");
    passwordField.focus();
  }
  else if(passwordField.value == verifyField.value)
  {
    alert("The passwords match!");
  }
}