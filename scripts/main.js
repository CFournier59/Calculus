// la Fonction mère qui regroupe les autres fonctions
function lancerJeu(){
    //initialisation du bouton start
    let startBtn = document.getElementById("start")
    startBtn.addEventListener("click", () => {
        lancerCalcul( startBtn)
    })
    //initialisation des autres boutons
    document.getElementById("restartButton").addEventListener("click", () => {
        location.reload()
    })
    document.getElementById("shareButton").addEventListener("click", () => {
        toggleSharePopup()
    })
    document.getElementById("closeButton").addEventListener("click", () => {
        toggleSharePopup()
    })



    // définir les paramètres des liens sociaux
    const link = encodeURI(window.location.href)
    const msg = encodeURIComponent(`Mon score est de 333, tu peux faire mieux?`)
    const title = encodeURIComponent(document.querySelector("title").textContent) 
    // facebook
    const fb = document.querySelector(".facebook")
    fb.href = `	https://www.facebook.com/sharer/sharer.php?u=${link}`
    // whatsapp
    const whatsapp = document.querySelector(".whatsapp")
    whatsapp.href = `https://wa.me/?text=${msg}`
    // linkedin
    const linkedin = document.querySelector(".linkedin")
    linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`
    // reddit
    const reddit = document.querySelector(".reddit")
    reddit.href = `https://www.reddit.com/submit?url=${link}&title=${title}`




}
//lancement du script    
lancerJeu()