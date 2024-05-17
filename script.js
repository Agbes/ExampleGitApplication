// Fonction pour changer la classe CSS du texte
function clignoterTexte() {
    var texte = document.getElementById("texte");
    texte.classList.toggle("blinking");
  }

// Appel de la fonction toutes les secondes
setInterval(clignoterTexte, 1000);