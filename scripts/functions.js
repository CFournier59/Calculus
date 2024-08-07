// PAGE DES FONCTIONS

// la fonction qui indique le score 
function retournerMessageScore(score){

    //sur la page prinicipale
    let spanScore = document.querySelector(".zoneScore span")
    spanScore.innerText = `${score}`
    //et sur la popup
    let scoreFin = document.querySelector("#description div")
    scoreFin.innerText = `${score}` 

}

// la fonction qui vérifie le score et le personnalise
function checkScore(score){

    let scorePicture = document.querySelector("#scoreCard img")
    let scoreDescription = document.querySelector("#description p")
    switch (score) {

        case 8 : 
        
            scorePicture.srcset =  "images/calcul_2.png"
            scorePicture.src = scorePicture.srcset
            scoreDescription.innerText = "C'est pas pire, mais tu peux faire mieux."
            break

        case 16 : 
        
            scorePicture.srcset =  "images/calcul_3.png"
            scorePicture.src = scorePicture.srcset
            scoreDescription.innerText = "Ça commence à cogiter là-dedans!"
            break

        case 20 : 
        
            scorePicture.srcset =  "images/calcul_4.png"
            scorePicture.src = scorePicture.srcset
            scoreDescription.innerText = "Les neuronnes sont en feu!!"
            break

        case 22 : 
        
            scorePicture.srcset =  "images/calcul_5.png"
            scorePicture.src = scorePicture.srcset
            scoreDescription.innerText = "T'es une p*tain de légende!!!"
            break

        case 29 : 
        
            scorePicture.srcset =  "images/calcul_6.png"
            scorePicture.src = scorePicture.srcset
            scoreDescription.innerText = "01001110 01 11101000110 11100000010100 10"
              
    }

}

// fonction qui mélange les mots ou les chiffres
function melangeur(listeMots){

    for (let index = listeMots.length - 1; index > 0; index--) {

        const j = Math.floor(Math.random() * (index + 1));
        [listeMots[index], listeMots[j]] = [listeMots[j], listeMots[index]];
    }

    listeMots.slice(0, 100); 
    return listeMots

}

// La fonction qui affiche les propostitions
function afficherPropositions(listeProposition){

    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = listeProposition

}

// Les fonctions qui signalent au besoin si la réponse est fausse

function borderFail(){

    let zoneProposition = document.querySelector(".zoneProposition")
    if(zoneProposition.className === "zoneProposition")
        zoneProposition.classList.toggle("fail")

}

function borderSuccess(){

    let zoneProposition = document.querySelector(".zoneProposition")
    if(zoneProposition.className !== "zoneProposition")
        zoneProposition.classList.toggle("fail")

}

// La fonction Email

function afficherEmail(nom, email, score) {

    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score de ${score} sur le site d'Azertype !`
    location.href = mailto

}

// fonction qui vérifie le champ : "nom" du popup

function validerNom(nom){

        let regexnom = new RegExp(".{2,}")
        if(!regexnom.test(nom)){

            throw new Error(`votre nom doit comporter au moins 2 caratères`)

        }
    
}

// fonction qui vérifie le champ : "email" du  popup

function validerEmail(email){

    let regexemail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if(!regexemail.test(email)){

        throw new Error(`le format de votre adresse mail n'est pas correct`)

    }
    
}

// fonction qui affiche l'erreur

function afficherErreur(message){

    let spanErreur = document.getElementById("erreurMessage")
    if(!spanErreur){

        let popup = document.querySelector(".popup")
        spanErreur = document.createElement("span")
        spanErreur.id = "erreurMessage"
        popup.append(spanErreur)
    
    }
   
    spanErreur.innerText = message

}

// fonction qui gère le formulaire du popup

function gererFormulaire(score){

    try{

        let nom = document.getElementById("nom").value
        validerNom(nom)
        let email = document.getElementById("email").value
        validerEmail(email)
        afficherErreur("")
        afficherEmail(nom, email, score)  

    }

    catch(erreur){

        afficherErreur(erreur.message)

    }
   
}

// fonction qui gère le compte à rebours

function compteARebours(inputEcriture){

    const main = document.querySelector("main")
    let countDown = document.createElement("h1")
    let sec = 30
    main.prepend(countDown)
    let timer = setInterval(function(){
            
        countDown.innerHTML= sec
        sec--
        //fin du compte à rebours
        if (sec < 0) {

            clearInterval(timer)
            inputEcriture.disabled = true
            afficherPopup()

            }

        }, 1000)

}

// fonction qui sort un nombre entre 1 et 9 au hasard

function randomNumber() {
    return Math.floor(Math.random() * 9);

}
