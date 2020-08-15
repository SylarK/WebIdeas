const btn_weather = document.querySelector('#btn-weather');
const city = document.querySelector('#city');
const key = 'a36b3b604804a1dc6b5820c8b7911118'; /*ori*/ 
            /*'7b4e840accf560effac0b4981c1438fd'*/
            
let result = document.querySelector('#weather');

btn_weather.addEventListener('click', getInfo);

function getInfo(){

    q = city.value;
    let api = "https://api.openweathermap.org/data/2.5/weather?q=" + q + "&appid=" + key;
    city.value = '';

    fetch(api)
        .then(res => res.json())
        .then(data => {
            init(data)         
        })  
}


    


