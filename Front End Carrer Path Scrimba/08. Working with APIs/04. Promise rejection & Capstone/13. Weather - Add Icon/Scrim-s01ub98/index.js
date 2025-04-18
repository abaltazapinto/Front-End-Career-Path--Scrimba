fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

// function getCurrentTime() {
//     const date = new Date()
//     document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
// }

// setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))
});

/**
 * Challenge: Display the weather icon as an <img />
 * inside the <div id="weather">
 * 
 * This site shows an example URL for the icon:
 * https://openweathermap.org/weather-conditions
 * 
 * Note: the weather icon is found instead data.weather, which is
 * an array of weather for that area. You can just access the first
 * item in that array to get the icon ID.
 */

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if(!res.ok){
                throw Error("Weather data not available")
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            const iconCode = data.weather[0].icon;
            console.log("Icon Code", iconCode);
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png` // Construct the icon URL
            console.log("iconUrl", iconUrl);
            const weatherDiv = document.getElementById("weather");
            const img = document.createElement("img");
            img.src = iconUrl;
            img.alt = "Weather Icon";
            const iconTemp = document.createElement('div');
            iconTemp.id = "iconTemp";
            iconTemp.appendChild(img);
            weatherDiv.appendChild(iconTemp);
            const paragraph = document.createElement('p');
            const temperature = Math.round(data.main.temp); // Obtenha temperatura do objeto data.
            paragraph.textContent = `${temperature}ºC`;
            iconTemp.appendChild(paragraph);
            weatherDiv.appendChild(iconTemp);
            const location = document.createElement('div');
            location.id = "nameLocation"
            location.alt = "Location of the place";
            const nameOfTheLocation = (data.name);
            location.textContent =`${nameOfTheLocation}`;
            weatherDiv.appendChild(location);
            
        })
        .catch(err => console.error(err))
    });
