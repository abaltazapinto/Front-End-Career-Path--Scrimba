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
        
                        <span> Current price : ${data.market_data.current_price.usd} </span>
                        <span>24-hour high price: ${data.market_data.high_24h.usd}</span>
                        <span>24-hour low price: ${data.market_data.low_24h.usd} </span>
            
        `;
        document.getElementById("crypto-price").innerHTML = `
 
        `

        /**
         * Challenge: Add the following data points underneath the 
         * name and icon (1 paragraph each):
         * 
         * 1. Current price (data.market_data.current_price.usd)
         * 2. 24-hour high price (data.market_data.high_24h.usd)
         * 3. 24-hour low price (data.market_data.low_24h.usd)
         * 
         * Feel free to check the response data object for your own currency
         * if you don't want to use USD.
         */
    })
    .then(data => {
        
    })
    .catch(err => console.error(err))