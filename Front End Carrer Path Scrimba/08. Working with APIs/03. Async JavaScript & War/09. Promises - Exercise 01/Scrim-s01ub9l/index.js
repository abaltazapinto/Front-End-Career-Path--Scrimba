fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")


/* 
The first challenge the correct answer i think it is Pending
*/
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
  });
  
  promise.then(function(data) {
    console.log(data); // "done"
  });

const promise1  = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
promise1.then(function1() {})