async function getCityLocation(city) {
    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=9d2d84cc33855d85419772dd76edbce6`,
        {
            mode: 'cors',
          }
        );
        const cityLocationData = await response.json();
     
       return { "latitude": cityLocationData[0].lat, "longitude": cityLocationData[0].lon };
    }
    catch(error) {
        console.log(error);
    }
   
 }
 
 async function getCityWeather(city) {
    try{
        const cityLocation = await getCityLocation(city);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation.latitude}&lon=${cityLocation.longitude}&units=metric&appid=9d2d84cc33855d85419772dd76edbce6`);
        const cityWeather = await response.json();
        const formattedCityWeather = formatCityWeather(cityWeather);
    
        return formattedCityWeather;
    }
    catch(err){
        console.log(err);
    }
     
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

 export {getCityWeather};