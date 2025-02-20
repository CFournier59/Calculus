/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
})

/**
 * Cette fonction affiche la popup pour partager son score. 
 */

//function togglePopup() {
    //let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    //popupBackground.classList.toggle("d-none")
//}


function lowOpacity() {
     document.querySelector(".popupBackground").style.backgroundColor = "rgba(255, 255, 255, 0.5)"
     document.querySelector("header").style.opacity = "0.5"
     document.querySelector("footer").style.opacity = "0.5"
}

function togglePopup() {
    document.getElementById("question").style.display = "none"
    let panelBackground = document.querySelector(".panelBackground")
    panelBackground.classList.add("d-none")
    let popupScore = document.getElementById("popupScore")
    popupScore.style.display = "flex"
    document.getElementById("restartButton").addEventListener("click", () => {
        location.reload()
    })
}



/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
   let btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        afficherPopup()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
}

