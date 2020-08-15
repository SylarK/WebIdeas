const btn_weather = document.querySelector('#btn-weather');
const city = document.querySelector('#city');
const key = '7b4e840accf560effac0b4981c1438fd';

let result = document.querySelector('#result');

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

function init(resultFromServer){
    console.log(resultFromServer)
}