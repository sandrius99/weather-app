async function displayWeather(cityWeather) {
    const city = document.querySelector('.city');
    const degrees = document.querySelector('.degrees');
    const feelsLike = document.querySelector('.feels-like');
    const state = document.querySelector('.state');
    const sunrise = document.querySelector('.sunrise');
    const sunset = document.querySelector('.sunset');

    city.innerText += `${cityWeather.name}, ${cityWeather.country}`;
    degrees.innerText += `${cityWeather.temp}°`;
    feelsLike.innerText += `Feels like: ${cityWeather.feels_like}°`;
    state.innerText += `Weather: ${cityWeather.weather.description}`;
    sunrise.innerText += `Sunrise at(local time): ${cityWeather.sunrise}`;
    sunset.innerText += `Sunset at(local time): ${cityWeather.sunset}`;

}

function clearWeatherDiv() {
    const city = document.querySelector('.city');
    const degrees = document.querySelector('.degrees');
    const feelsLike = document.querySelector('.feels-like');
    const state = document.querySelector('.state');
    const sunrise = document.querySelector('.sunrise');
    const sunset = document.querySelector('.sunset');

    city.innerHTML = "";
    degrees.innerHTML = "";
    feelsLike.innerHTML = "";
    state.innerHTML = "";
    sunrise.innerHTML = "";
    sunset.innerHTML = "";

}

export {displayWeather, clearWeatherDiv};