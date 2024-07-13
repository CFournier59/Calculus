function lancerMots(inputEcriture, listeMots, i, startBtn, score){

    // vérouillage du choix
    let zoneOptions = document.querySelector(".zoneOptions")
    zoneOptions.classList.add("d-none")
    // activation de la zone d'écriture
    inputEcriture.disabled = false
    inputEcriture.focus()
    // randomisation et affichage de la liste de proposition
    melangeur(listeMots)
    afficherPropositions(listeMots[i])
    // vérouillage du bouton start
    startBtn.disabled = true
    //ajout de l'event pour entrer les réponses
    inputEcriture.addEventListener('keypress', function (e) {
    
        if (e.key === 'Enter') { 
    
            let inputEcriture = document.getElementById("inputEcriture")
            if(inputEcriture.value === listeMots[i]) {

                borderSuccess()
                score ++
                checkScore(score)
                i++
    
            }

            else{

                borderFail()

            }

            
            afficherPropositions(listeMots[i])
            inputEcriture.value = ""
            retournerMessageScore(score)
            
            }
    
        }); 
    
    //lancement du compte à rebours
    compteARebours(inputEcriture)
    //Gestion du Formulaire de la popup
    let form = document.querySelector(".popup form")
    form.addEventListener("submit", (event) => {
      
        event.preventDefault()
        gererFormulaire(score)
              
    })

}