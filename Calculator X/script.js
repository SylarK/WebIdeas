/*Classe Calculator*/
class Calculator {
    constructor(viewerP, viewerC){
        this.viewerC = viewerC;
        this.viewerP = viewerP;
        this.clear();
    }

    /*Clear method*/
    clear() {

        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    /*Erase method*/
    erase(){
        /*Utilizando slice para retirar o último número digitado*/
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    /*Add number method*/
    addNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    /*Operadores - Método para escolher um operador*/
    chooseOperation(operation){
        if(this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.calc();
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    /*Calc method*/
    calc(){

        let result;
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(previous) || isNaN(current)) return

        switch (this.operation){
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '/':
                result = previous / current;
                break;
            case '*':
                result = previous * current;
                break;
            default:
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';

    }

    /*Display*/
    getDisplay(number){
        const stringNumber = number.toString();
        const intDigits = parseFloat(stringNumber.split('.')[0]);
        const decDigits = stringNumber.split('.')[1];

        let intDisplay;

        if(isNaN(intDigits)){
            /*Se valor não for igual a um número*/
            intDisplay = '';
        } else {
            intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }

        if(decDigits != null){
            return `${intDisplay}.${decDigits}`
        } else {
            return intDisplay;
        }


    }

    /*Update*/
    updateDisplay(){
        this.viewerC.innerText = this.getDisplay(this.currentOperand);
        if(this.operation != null){
            this.viewerP.innerText = `${this.getDisplay(this.previousOperand)} ${this.operation}`;
        } else {
            this.viewerP.innerText = '';
        }
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

const calculator = new Calculator(viewerP, viewerC);

/*Escutando todos os numberBtn*/
numberBtn.forEach(button=>{
    button.addEventListener('click', () => {
        //Adicionando o valor através do innerText
        calculator.addNumber(button.innerText);
        calculator.updateDisplay();
    })
})

/*Escutando todos os operators*/
operators.forEach(button=>{
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

/*Escutando Btn Equal*/
equalsBtn.addEventListener('click', () => {
    calculator.calc();
    calculator.updateDisplay();
})

/*Escutando Btn Erase*/
eraseBtn.addEventListener('click', () => {
    calculator.erase();
    calculator.updateDisplay();
})

/*Escutando Btn Clear*/
clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();

})


