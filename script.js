var openButton = document.querySelector("header nav ul li > button");
var closeButton = document.querySelector("header nav ul:nth-of-type(2) > button");

 
openButton.onclick = openMenu;
closeButton.onclick = closeMenu;

 
function openMenu() {  
  var deNav = document.querySelector("header nav");
  deNav.classList.add("toonMenu");
}

function closeMenu() {
    var deNav = document.querySelector("header nav");
    deNav.classList.remove("toonMenu");
}
 
window.onkeydown = handleKeydown;
 
function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}
// elaine heeft mij hier heel veel bij geholpen want ik kwam er in mijn eentje niet uit.

 








var hartIcoon = document.querySelector("main article img");

hartIcoon.onclick = hartRood;

function hartRood() {
  var huidigeImg = hartIcoon.src.substring(hartIcoon.src.lastIndexOf('/') + 1);
 
  console.log(huidigeImg);
 
  if ( huidigeImg == "harticoon.png" ) {
     hartIcoon.src = "img/harticoon2.png";
  }
  else {
    hartIcoon.src = "img/harticoon.png";
  }
}

// sanne heeft een deel van deze code gegeven aan mij, want ik kwam er helaas niet in mijn eentje uit hoe ik de micro-animatie moest laten werken.


