var ACCESS = 'iq5XxVIXCt7IKn7yR6QfLfDDIfdS4DYHZKfYIGl-9lg';
var SECRET = 'HqH-efkkc7G_IUmyZfYujl2GEK5ekdqruiEYnvRYwFk';


var weatherKey = '36ddb73cf3ac4f2cba21671298fa38d1';

const inputCity = document.querySelector('.cityInput')
const searchButton = document.querySelector('.form button');
const headingElement = document.querySelector('.heading');
const tempElement = document.querySelector('.temp');
const descElement = document.querySelector('.desc');
const iconElement = document.querySelector('.icon');
const humidityElement = document.querySelector('.humidity');
const speedElement = document.querySelector('.speed');

const fetchWeather = city =>{
    // console.log(city);
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=' +
city + '&units=metric&appid=' + weatherKey;
    fetch(api).then(function(response){
        const res = response.json();
        // console.log(res);
        return res;
    }).then(data=>{
        processData(data);
    })
}


const processData = data =>{
    // City
    const {name:city} = data;

    // Country

    const {country} = data.sys;

    // Temp

    const {temp} = data.main;

    // Weather (Scattered Clouds)

    const {description:desc, icon} = data.weather[0];

    // Humidity

    const {humidity} = data.main;

    // Wind Speed

    const {speed} = data.wind;

    displayWeather(icon,city,temp,desc,humidity,speed);


}


const displayWeather = (... data) =>{
    const [icon,city,temp,desc,humidity,speed] = data;

    const iconURl = `https://openweathermap.org/img/wn/${icon}.png`;

    headingElement.innerText = `Weather in ${city}`;

    tempElement.innerText = `${temp}° C`;

    iconElement.src = iconURl;

    descElement.innerText = desc;

    humidityElement.innerText = `Humidity: ${humidity}%`;
    speedElement.innerText = `Wind Speed: ${speed}km/h`;
}


searchButton.addEventListener('click', e=>{
    const input= inputCity.value;

    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${input}")`;

    // console.log(input);

    if(input !== '')
    {
        fetchWeather(input);
    }
})

inputCity.addEventListener('keypress', e=>{
    if(e.key === 'Enter')
    {
        const input= inputCity.value;

        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${input}")`;

        // console.log(input);

        if(input !== '')
        {
            fetchWeather(input);
        }
    }
})

fetchWeather('London');
document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?London")`;

