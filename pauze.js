// hieronder worden de button en de video in de javascript geladen

var pauseButton = document.querySelector('#pause')
var prodVideo = document.querySelector('#productVideo')

// hieronder wordt geregeld dat wanneer er op de pauze knop gedrukt wordt, de functie pauzeer wordt geactiveerd

pauseButton.addEventListener("click", pauzeer)

// de functie pauzeer zorgt ervoor dat er een console log wordt geplaatst met "gepauzeerd", de video wordt gepauzeerd, en de tekst verandert in play.

function pauzeer(){
  pauseButton.removeEventListener("click", pauzeer)
  pauseButton.addEventListener("click", afspelen)
  console.log("gepauzeerd")
  prodVideo.pause();
  pauseButton.innerHTML = "play";

}

function afspelen(){
  pauseButton.removeEventListener("click", afspelen)
  pauseButton.addEventListener("click", pauzeer)
  console.log("afgespeeld")
  prodVideo.play();
  pauseButton.innerHTML = "pause";
}
// Ik heb hulp gehad van Thomas bij dit stuk javascript
