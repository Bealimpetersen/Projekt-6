function validate(){
  let name = document.getElementById("name").value;
  let company = document.getElementById("company").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  let text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(company.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

