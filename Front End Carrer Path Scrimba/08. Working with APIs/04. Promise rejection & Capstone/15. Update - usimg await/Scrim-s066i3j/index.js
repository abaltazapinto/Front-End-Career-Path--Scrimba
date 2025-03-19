const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
const data = await res.json()
document.body.style.backgroundImage = `url(${data.urls.regular})`
document.getElementById("author").textContent = `By: ${data.user.name}`

//     .catch(err => {
//         // Use a default background image/author
//         document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
// )`
// 		document.getElementById("author").textContent = `By: Dodi Achmad`
//     })

/**
 * Challenge: Update the fetch below to use the top-level await
 */

// challenge
try {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await.response.json();

    // Update the html elements directly using the fetched data
    document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
            `;
    document.getElementById("crypto").innerHTML += ` 
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `;

} catch (error) {
    console.error("Error fetching or processing data: ", error);
    document.getElementById("crypto").innerHTML = "<p>Failed to load cryptocurrency data.</p>";
}



// fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
//     .then(res => {
//         if (!res.ok) {
//             throw Error("Something went wrong")
//         }
//         return res.json()
//     })
//     .then(data => {
//         document.getElementById("crypto-top").innerHTML = `
//             <img src=${data.image.small} />
//             <span>${data.name}</span>
//         `
//         document.getElementById("crypto").innerHTML += `
//             <p>🎯: $${data.market_data.current_price.usd}</p>
//             <p>👆: $${data.market_data.high_24h.usd}</p>
//             <p>👇: $${data.market_data.low_24h.usd}</p>
//         `
//     })
//     // .catch(err => console.error(err))

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

/**
 * Challenge: Update the callback below to use async/await
 */


function getUserLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function updateWeather() {
    try {
        const position = await getUserLocation();
        const { latitude, longitude } = position.coords;
        await fetchWeather(latitude, longitude);
    } catch (err) {
        console.error("Failed to get user location", err);
    }
}

updateWeather();

// navigator.geolocation.getCurrentPosition(position => {
//     fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
//         .then(res => {
//             if (!res.ok) {
//                 throw Error("Weather data not available")
//             }
//             return res.json()
//         })
//         .then(data => {
//             const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
//             document.getElementById("weather").innerHTML = `
//                 <img src=${iconUrl} />
//                 <p class="weather-temp">${Math.round(data.main.temp)}º</p>
//                 <p class="weather-city">${data.name}</p>
//             `
//         })
//         .catch(err => console.error(err))
// });
