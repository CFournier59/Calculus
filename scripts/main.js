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
    // Gérer les choix
    let choixDuJeu = "les mots"
    let listeChoix = document.querySelectorAll("input[type=radio")
    listeChoix[0].checked = true
    for(let b=0; b<listeChoix.length; b++){
    
        listeChoix[b].addEventListener("change", (event) => {
    
            console.log(event.target.value)
            if(event.target.value === "1"){

                choixDuJeu = "les mots"
                afficherPropositions("les mots")
    
            }
    
            else{
    
                choixDuJeu = "les nombres"            
                afficherPropositions("les nombres")
    
            }
    
        })
    
    }
    
    // démarage de la partie au click du bouton start
    let startBtn = document.getElementById("startBtn")
    startBtn.addEventListener("click", () => {

        if(choixDuJeu === "les mots"){

            lancerMots(inputEcriture, listeMots, i, startBtn, score)

        }

        else{

            lancerCalcul(inputEcriture, i, startBtn, score)

        }

    })
                   
    // Gestion du popup de partage
    initAddEventListenerPopup()
   
    
}

//lancement du script    
lancerJeu()












