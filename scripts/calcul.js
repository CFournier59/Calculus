
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
    //génère le premier calcul
    let goodAnswer = generateMath()
    // mise en place de l'évenement "entrée"
    answer.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            // comparaison des réponses
            if( Number(answer.value) === goodAnswer) {
                score ++
                checkScore(score)
                goodAnswer = generateMath()              
            }
            else{             
            }           
            answer.value = ""
            retournerMessageScore(score)
        }
    })
    //mise en place du chrono
    compteARebours(answer)

    




   //  `<div id = "question"><div id = "1" class = "number">0</div><div id = "symbol" class = "number">X</div><div id = "2" class = "number">0</div></div>`


}
        




   