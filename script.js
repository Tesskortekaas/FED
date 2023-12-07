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