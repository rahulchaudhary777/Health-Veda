let popup = document.getElementsByClassName("popup")[0];
var thanks = document.getElementsByClassName("thanks")[0];
var username = document.getElementsByClassName("input")[0];
var mobile = document.getElementsByClassName("input")[1];
var message = document.getElementById("message");

function openPopup() {
  if (!thanks.classList.contains("thanks-visible")){
      username.value = "";
      mobile.value = "";
      message.value = "";
      popup.classList.add("open-popup");
  }
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function hide() {
  thanks.style.transition="0.2s linear";
  thanks.style.transform = "translate(50%, 50%)";
  thanks.classList.remove("thanks-visible");
  
}

// prevent default behaviour of form
document.getElementById("form").addEventListener("click", (event) => {
  event.preventDefault();
})

function thanksVisible() {
  if(username.value != "" && mobile.value != "" && message.value != ""){
    popup.classList.remove("open-popup");
    thanks.classList.add("thanks-visible");
  }
}

setInterval(function time() {
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if ((min + "").length == 1) {
    min = "0" + min;
  }
  var sec = 60 - d.getSeconds();
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }
  document.getElementById("thanksPara").innerHTML =
    `our team call you back within ${hours}:${min}:${sec} hours.`;
}, 1000);


var flag=0;
var slides;
var buttons;

function slideShow (num){
  slides=document.getElementsByClassName("carousel1");
    console.log(slides);
    for(let y of slides){
     y.style.display="none";
    }
    slides[num].style.display = "block";
 }
 slideShow (flag);
 