const CHOICEONE = document.querySelector('#choiceOne')
const CHOICETWO = document.querySelector('#choiceTwo')
const CHOICETHREE = document.querySelector('#choiceThree')

CHOICEONE.addEventListener('click', ()=> {
    document.body.classList.remove('is-grey')
    document.body.classList.remove('is-dark')
} , false)


CHOICETWO.addEventListener('click', ()=> {
    document.body.classList.remove('is-dark')
    document.body.classList.add('is-grey')
} , false)

CHOICETHREE.addEventListener('click', ()=> {
    document.body.classList.remove('is-grey')
    document.body.classList.add('is-dark')
} , false)