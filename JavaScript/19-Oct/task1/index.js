var emailReg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
var passwordReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var phoneNumberReg = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
var nameReg = new RegExp(/([^\s])/);
function validation (){

  var name = document.forms["formOne"]["username"].value;
  var email = document.forms["formOne"]["input-email"].value;
  var password = document.forms["formOne"]["input-password"].value;
  var phoneNumber = document.forms["formOne"]["input-phoneNumber"].value;
  if(nameReg.test(name) != true){
    alert("wrong name");
    return false;
  }

  if(phoneNumberReg.test(phoneNumber) != true){
    alert("wrong phone number");
    return false;
  }
  
  if(emailReg.test(email) != true){
    alert("wrong email");
    return false;
  }

  if(passwordReg.test(password) != true)
  {
  alert("wrong password");
  return false;
  }

  alert("Registeration complete!");
  return true;

}

function changed(checkbox){
  if(checkbox.checked){
    document.getElementById("submitBtn").disabled = false;
  }else {
    document.getElementById("submitBtn").disabled = true;
  }
}

