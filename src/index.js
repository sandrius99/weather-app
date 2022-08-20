import {getCityWeather} from "./api.js";
import {displayWeather, clearWeatherDiv} from "./dom.js";


async function getWeather(city) {
    let cityWeather = await getCityWeather(city);
    await displayWeather(cityWeather);
}

 getWeather('Vilnius')

const searchBtn = document.getElementById("search-img");
const input = document.getElementById("search");
searchBtn.addEventListener('click', e => {
    if(input.validity.patternMismatch){
        input.setCustomValidity("Please use only letters");
        input.reportValidity();
        return
        
    } else {
        input.setCustomValidity('');
        clearWeatherDiv()
      }
      getWeather(input.value)

})



