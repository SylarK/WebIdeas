var viewer = document.querySelector('#viewer');
var erase = document.querySelector('#erase');
var divi = document.querySelector('#divi');
var clear = document.querySelector('#clear');
var times = document.querySelector('#times');
var minus = document.querySelector('#minus');
var plus = document.querySelector('#plus');
var change = document.querySelector('#change');
var equals = document.querySelector('#equals');

var el = function(element) {
    if(element.charAt(0) === "#"){
        return document.querySelector(element);
        console.log('get');
    } else {
        return document.querySelectorAll(element)
        console.log('get');
    }
}

/*Display*/
var display = el('#viewer')
/*Equals*/
var equals = el('#equals')
/*Operators*/
var ops = el('.ops')
/*Numbers*/
var num = el('.number')
var current = '';

/*Loop para os operators*/
for (var i = 0;i < ops.length; i++){
    ops[i].onclick = sayHello
}

/*Loop para os números*/
for (var i = 0; i<num.length; i++){
    num[i].addEventListener('click', () => {
        display.innerHTML = '---'
    })
}

function sayHello(){
    alert('Hello.')
}

