const API_KEY = "82b35ab8a778507ca514595efe87ff0c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("you live in ", lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = data.weather[0].main;
        });
}
function onGeoError(){
    alert("Can't find your location, so no weather")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);