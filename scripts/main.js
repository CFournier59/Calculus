// la Fonction mère qui regroupe les autres fonctions

function lancerJeu(){

    let startBtn = document.getElementById("start")
    startBtn.addEventListener("click", () => {

        lancerCalcul( startBtn)

    })
                        
}

//lancement du script    
lancerJeu()












