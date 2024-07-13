// la Fonction mère qui regroupe les autres fonctions

function lancerJeu(){

    //  paramétres initiaux   
    let score = 0

    //affichage des informations
    retournerMessageScore(score)

    //on vide le champ de saisie et on le désactive 

    // démarage de la partie au click du bouton start
    let startBtn = document.getElementById("start")
    startBtn.addEventListener("click", () => {

        lancerCalcul(inputEcriture, i, startBtn, score)

    })
                   
    // Gestion du popup de partage
    
      
}

//lancement du script    
lancerJeu()












