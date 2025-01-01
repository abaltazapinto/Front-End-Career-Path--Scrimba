/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/


let element = document.getElementById("text");
let nextElement = element.closest('p');


console.log(nextElement)
document.getElementById("fetch").addEventListener("click", () =>
 fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        if (nextElement) {
          nextElement.textContent = data.activity;
        } else {
          console.error("No paragraph element found for element with ID 'text'")
        }
     })
);
