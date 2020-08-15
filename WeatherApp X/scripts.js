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

function init(resultFromServer){
    
    /*Switch para escolher a imagem de background*/
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            result.innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_960_720.jpg" alt='Clear sky' />`;
            break;
        case 'Clouds':
            result.innerHTML = `<img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg" alt='Clouds'/>`;
            break;
        case 'Rain':
            result.innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_960_720.jpg" alt='Rain'/>`;
            break;
        case 'Drizzle':
            result.innerHTML = `<img src="https://cdn.pixabay.com/photo/2019/10/30/21/46/gods-gift-4590624_960_720.jpg" alt='Drizzle'/>`;
            break;
        case 'Mist':
            result.innerHTML = `<img src="https://cdn.pixabay.com/photo/2018/11/01/05/33/british-columbia-3787200_960_720.jpg" alt='Mist'/>`;
            break;
        case 'Thunderstorm':
            result.innerHTML = `<img src="https://cdn.pixabay.com/photo/2018/05/30/15/39/thunderstorm-3441687_960_720.jpg" alt='Thunderstorm' />`;
            break;
        case 'Snow':
            result.innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/03/04/16/03/snowflakes-1236245_960_720.jpg" alt='Snow'/>`;
            break;
        
        default:
            console.log('Não pegou nenhum valor');
            break;
    }

}