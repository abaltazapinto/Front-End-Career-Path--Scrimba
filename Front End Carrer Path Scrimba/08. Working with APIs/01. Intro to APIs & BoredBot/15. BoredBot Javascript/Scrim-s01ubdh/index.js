/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/
let button = document.getElementById("button")

button.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("fetch").textContent = data.activity;
    })
})