const CHOICEONE = document.querySelector('#choiceOne')
const CHOICETWO = document.querySelector('#choiceTwo')
const CHOICETHREE = document.querySelector('#choiceThree')

CHOICEONE.addEventListener('click', ()=> {
    document.body.classList.remove('is-grey')
    document.body.classList.remove('is-dark')
    document.body.style.transitionDuration = '1s'
} , false)


CHOICETWO.addEventListener('click', ()=> {
    document.body.classList.remove('is-dark')
    document.body.classList.add('is-grey')
} , false)

CHOICETHREE.addEventListener('click', ()=> {
    document.body.classList.remove('is-grey')
    document.body.classList.add('is-dark')
} , false)


//fonction qui évalue le chiffre et renvoie la sortie
function calculer() 
{ 
    let a = document.getElementById("output").value 
    let b = eval(a) 
    document.getElementById("output").value = b 
} 
//fonction qui affiche la valeur
function afficher(val) 
{ 
    document.getElementById("output").value+=val 
} 
//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("output").value = "" 
}