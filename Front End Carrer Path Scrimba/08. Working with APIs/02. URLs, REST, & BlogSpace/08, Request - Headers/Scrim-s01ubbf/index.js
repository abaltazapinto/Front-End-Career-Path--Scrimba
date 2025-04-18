/**
 * Challenge:
 * 
 * Check this website for how to change the Content-Type header
 * to indicate that there's JSON in the request body.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 * 
 * Apply that header to our fetch request, send it, and check what comes back.
 */


const myHeaders = new Headers();
myHeaders.append("Content-type", "application/json");

const response = fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    })
})
    .then(res => res.json())
    .then(data => console.log(data))