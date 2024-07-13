// la Fonction mère qui regroupe les autres fonctions

function lancerJeu(){

    //  paramétres initiaux   
    let i = 0 
    let score = 0
    let inputEcriture = document.getElementById("inputEcriture")
    //affichage des informations
    retournerMessageScore(score, i)
    afficherPropositions("Validez avec la touche Entrée")
    //on vide le champ de saisie et on le désactive 
    inputEcriture.value = ""
    inputEcriture.disabled = true  
    // démarage de la partie au click du bouton start
    let startBtn = document.getElementById("startBtn")
    startBtn.addEventListener("click", () => {

        lancerCalcul(inputEcriture, i, startBtn, score)

    })
                   
    // Gestion du popup de partage
    initAddEventListenerPopup()
      
}

//lancement du script    
lancerJeu()












