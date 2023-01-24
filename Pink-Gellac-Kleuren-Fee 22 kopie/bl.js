/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

// variabele aangemaakt van de menu button
var deButton = document.querySelector("body header nav > button");

// de menu-button luisterd zo naar kliks en voer dan een functie uit (togglemenu)
deButton.addEventListener("click", toggleMenu);

function toggleMenu() {  
  // variabele aangemaakt van de nav
  var deNav = document.querySelector("body header nav");
 
  // deze stap snap ik nog niet zo goed
  deNav.classList.toggle("toonMenu");

  document.documentElement.classList.toggle("toonMenu");
}





/* bonus: menu sluiten met escape */
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

