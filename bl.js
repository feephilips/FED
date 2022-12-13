/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var deButton = document.querySelector("body header nav > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.addEventListener("click", toggleMenu);

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("body header nav");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("toonMenu");
}





/* bonus: menu sluiten met escape */
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

