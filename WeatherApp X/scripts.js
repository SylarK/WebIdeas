const searchbox = document.querySelector('#city');
const key = 'a36b3b604804a1dc6b5820c8b7911118'; /*ori*/ 
            /*'7b4e840accf560effac0b4981c1438fd'*/

/*  Adicionando um evento que escutará as teclas pessionadas  */
/*  Lista com keycodes para cada tecla: http://gcctech.org/csc/javascript/javascript_keycodes.htm */

searchbox.addEventListener('keypress', checkEnter)

function checkEnter(evt){

    if(evt.keyCode == 13){
        getInfo(searchbox.value)
    }

}


function getInfo(value){

    q = value;
    let api = "https://api.openweathermap.org/data/2.5/weather?q=" + q + "&units=metric&appid=" + key;
    /*Lembrar de zerar valor do input*/

    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data)        
        })  
}


    


