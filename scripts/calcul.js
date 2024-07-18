
function lancerCalcul(startBtn,){
 
    // transformation du bouton start en zone de saisie
    let divBlue = document.getElementById("divBlue")
    divBlue.innerHTML = `<p id= "i2">Utilise ton clavier pour taper la réponse et valide avec la touche "Entrée"</p><input maxlength = "2" type = "text" id="answer" name = "answer" class="a grey">`
    let answer = document.getElementById("answer")
    answer.focus()
    // gestion du score
    let score = 0
    // cacher les consignes
    for(let i = 1 ; i < 4 ; i++){
   
        let hideText = document.querySelector(`#i${i}`);  
        hideText.classList.add("hide");
    }
    // mise en forme du calcul
    let main = document.querySelector("main")
    let question = document.createElement("div")
    question.id = "question"
    question.innerHTML = `<div id = "1" class = "number">0</div><div id = "symbol" class = "number">X</div><div id = "2" class = "number">0</div>`
    main.prepend(question)
    // génération et affichage du calcul à résoudre
    let oneDiv = document.getElementById("1")
    let one = randomNumber()
    oneDiv.innerText = `${one}`
    let twoDiv = document.getElementById("2")
    let two = randomNumber()
    twoDiv.innerText = `${two}`
    let symbol = document.getElementById("symbol")
    melangeur(modificateur)
    symbol.innerText = modificateur[0]
    symbolColor(symbol)
    //ajout de l'event pour entrer les réponses
    answer.addEventListener('keypress', function (e) {
    
        if (e.key === 'Enter') { 
        
            // résolution du calcul
            let goodAnswer = null
            switch (modificateur[0]){

                case " + ":

                    goodAnswer = one + two 
                    console.log (goodAnswer)
                    break

                case " - ":

                    goodAnswer = one - two
                    console.log(one.innerText - two.innerText)
                    break

                case " X ":

                    goodAnswer = one * two
                    console.log(one.innerText * two.innerText)
                    
            }

            // comparaison des réponses
            if( Number(answer.value) === goodAnswer) {

                score ++
                checkScore(score)
                one = randomNumber()
                oneDiv.innerText = `${one}`
                two = randomNumber()
                twoDiv.innerText = `${two}`
                melangeur(modificateur)
                symbol.innerText = modificateur[0]
                symbolColor(symbol)
                console.log("ok")
                 
            }

            else{

              

            }
            
            answer.value = ""
            retournerMessageScore(score)
        }

    })
    




   //  `<div id = "question"><div id = "1" class = "number">0</div><div id = "symbol" class = "number">X</div><div id = "2" class = "number">0</div></div>`


}
        




   