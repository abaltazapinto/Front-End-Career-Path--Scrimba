/**
Challenge:

- Send a request to add a new todo item
    - BaseURL: https://apis.scrimba.com/jsonplaceholder/
    - Endpoint: /todos
- Body object should contain a "title" property (string) 
  and a "completed" property (boolean)
- Don't add the .then() blocks yet - we have 1 more thing 
  to do before it'll work correctly

Part 2 - add the .then blocks to check the data coming back

*/

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     header: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: "Buy Milk",
//         completed: false
//     })
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Fetch failed:', error);
//     });
fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
  method: "POST",
  body: JSON.stringify({
      title: "Buy Milk",
      completed: false
  })
})
  .then(res => res.json())
  .then(data => console.log(data))