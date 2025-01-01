Try to think of a time you used each of the four main methods
(GET, POST, PUT, DELETE) in the real world as you went about
your regular usage of the internet. E.g. today, I checked the
weather on my phone which probably sent a GET request to retrieve
weather information.

GET:  to be able to get the latest number of the lottery. 

POST: when i post a photo on instagram.

PUT: when i edit a comment that ive made on facebook 

DELETE: when i delete a photo

/**
Challenge: 

Fetch a list of todos from the JSON Placeholder API:

BaseURL: https://apis.scrimba.com/jsonplaceholder/
Endpoint: /todos

This time however, explicitly set the request method to "GET"
console.log the results
*/

document.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/jsonplaceholder/todos" {method: get})
})