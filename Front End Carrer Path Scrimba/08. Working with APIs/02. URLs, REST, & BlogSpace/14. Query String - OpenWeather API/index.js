/**
 * Challenge part 1: GET the current weather for your city with 
 * the Open Weather API and log it to the console.
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
 * Endpoint: /weather
 * Query: ??? (https://openweathermap.org/current)
    * NOTE: It says you need to include `appid` in your query, but you can skip that this time
 */

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Porto&units=metric")
    .then(response => response.json())
    .then(data => console.log(data));


// Query String