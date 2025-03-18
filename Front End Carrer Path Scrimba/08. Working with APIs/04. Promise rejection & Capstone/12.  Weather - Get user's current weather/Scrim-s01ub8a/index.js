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


/**
 * Challenge: Get the user's current weather for their area and 
 * log it to the console
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/weather
 * Queries to include: 
 *     - lat (latitude)
 *     - lon (longitude)
 *     - units (imperial or metric)
 */

navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`Latitude: ${lat}, Longitude: ${lon}`)

    const apiKey = 'f9d989e0f19b54a9a9945eeaf0374634';
    const url = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    try { 
        // Requisition to take out the clima
        const response = await fetch(url);
        const data = await response.json();

        // Exibir os dados do clima 
        console.log(`Temperatura atual: ${data.main.temp} ºF`);
        console.log(`Condicao climatica: ${data.weather[0].description}`);
        
    } catch(error) {
        console.error("Erro ao obter dados do clima:", error);
    }
}, (error) => {
    console.error("Erro ao obter a localização:", error.message);
});
