/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/


fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        const textFetched = data.activity;
        const text = document.createElement('p');

        text.textContent = textFetched;

        const container = document.getElementById("text-container");
        container.appendChild(text)
        console.log(data);
    })

// crazy life just forget it to out a a brackets at the end of it () response => response.json()