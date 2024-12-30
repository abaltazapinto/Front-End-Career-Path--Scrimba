/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("activity-name").textContent = data.activity
//     })
const button = document.getElementById("button");

button.addEventListener("click", () => {
fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
    const placeholder = document.createElement('p');
    const textFetched = data.activity;

    placeholder.textContent = textFetched;

    const container = document.getElementById("activity-name");
    container.textContent = "";
    container.appendChild(placeholder)
  })
  .catch(error => console.error("Error fetching activity", error));
});

