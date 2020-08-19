/*Classe Calculator*/
class Calculator {
    constructor(viewerP, viewerC){
        this.viewerC = viewerC;
        this.viewerP = viewerP;
        this.clear();
    }


}


/*Constantes*/
const numberBtn = document.querySelectorAll('[data-num]');
const operators = document.querySelectorAll('[data-ops]');
const equalsBtn = document.querySelector('[data-equals]');
const eraseBtn  = document.querySelector('[data-delete]');
const clearBtn  = document.querySelector('[data-ac]');
const viewerC   = document.querySelector('#viewer'); /*Atual*/
const viewerP   = document.querySelector('#viewerPrev'); /*Anterior*/

//const calculator = new Calculator(viewerP, viewerC);

/*Escutando todos os numberBtn*/
numberBtn.forEach(button=>{
    button.addEventListener('click', () => {
        
    })
})

/*Escutando todos os operators*/
operators.forEach(button=>{
    button.addEventListener('click', () => {

    })
})

/*Escutando Btn Equal*/
equalsBtn.addEventListener('click', () => {

})

/*Escutando Btn Erase*/
eraseBtn.addEventListener('click', () => {

})

/*Escutando Btn Clear*/
clearBtn.addEventListener('click', () => {
    
})


