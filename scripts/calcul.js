
function lancerCalcul(inputEcriture, i, startBtn, score){
  
    // vérouillage du choix
    let zoneOptions = document.querySelector(".zoneOptions")
    zoneOptions.classList.add("d-none")
    // activation de la zone d'écriture
    inputEcriture.disabled = false
    inputEcriture.focus()
    // vérouillage du bouton start
    startBtn.disabled = true
    // génération et affichage du calcul à résoudre
    let nombre1 = randomNumber()
    let nombre2 = randomNumber()
    melangeur(modificateur)
    afficherPropositions(nombre1 + modificateur[i] + nombre2)
    //ajout de l'event pour entrer les réponses
    inputEcriture.addEventListener('keypress', function (e) {
    
        if (e.key === 'Enter') { 
    
            let inputEcriture = document.getElementById("inputEcriture")
            let nombre3 = Number(inputEcriture.value)
            let answer = 0
            // résolution du calcul
            switch (modificateur[i]){

                case " + ":

                    answer = nombre1 + nombre2
                    break

                case " - ":

                    answer = nombre1 - nombre2
                    break

                case " X ":

                    answer = nombre1 * nombre2
                    
            }

            // comparaison des réponses
            if(nombre3 === answer) {

                borderSuccess()
                score ++
                checkScore(score)
                nombre1 = randomNumber()
                nombre2 = randomNumber()
                melangeur(modificateur)
                afficherPropositions(nombre1 + modificateur[i] + nombre2)
                
            }

            else{

                borderFail()

            }
            
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