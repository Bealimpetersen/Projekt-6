
// Emma JavaScript//

function burgermenu() {
//her erklæres variablen og tildeles en værdi //
  var myLinks = document.getElementById("menupunkter");
// === betyder lig med og samme type //
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}






// Beas JS //

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
  if(company.length < 3){
    text = "Please Enter Correct Company";
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
  alert("Din besked er sendt - vi kontakter dig indenfor 5 hverdage!");
  return true;
}



// Signe JS //
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active2');
    }
    else{
      reveals[i].classList.remove('active2');
    }
  }
}
// Najas JS //
//Hente knappen
var toTopButton = document.getElementById("toTopButton");

//Når brugeren scroller 20px ned fra toppen, vis knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrolltop > 10 || document.documentElement.scrolltop > 10) {
    toTopButton.style.display = "none";
  }
  else {
    toTopButton.style.display = "block";
    }
  }

//Når brugeren trykker på knappen. scroll til toppen af siden
function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, Internet Explorer og Opera
  }
