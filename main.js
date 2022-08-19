async function getCityLocation(city) {
   const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=9d2d84cc33855d85419772dd76edbce6`)
   const cityLocationData = await response.json();
    console.log(cityLocationData);
  return { "latitude": cityLocationData[0].lat, "longitude": cityLocationData[0].lon };
}

async function getCityWeather(city) {
    const cityLocation = await getCityLocation(city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation.latitude}&lon=${cityLocation.longitude}&units=metric&appid=9d2d84cc33855d85419772dd76edbce6`);
    const cityWeather = await response.json();
    const formattedCityWeather = formatCityWeather(cityWeather);
    console.log(cityWeather);
    console.log(formattedCityWeather)
    console.log(new Date(cityWeather.sys.sunrise * 1000))
}

 function formatCityWeather(cityWeather) {
    const formatted = {
        "temp": Math.round(cityWeather.main.temp),
        "feels_like": Math.round(cityWeather.main.feels_like),
        "name": cityWeather.name,
        "country": cityWeather.sys.country,
        "sunrise": new Date(cityWeather.sys.sunrise * 1000).toString().split(" ")[4].substring(0,5),
        "sunset": new Date(cityWeather.sys.sunset * 1000).toString().split(" ")[4].substring(0,5),
        "weather": {"state" : cityWeather.weather[0].main, "description": cityWeather.weather[0].description}


    }
    // Make first letter uppercase
    formatted.weather.description = formatted.weather.description.charAt(0).toUpperCase() + formatted.weather.description.slice(1);
    return formatted;
}




getCityWeather('Vilnius');
