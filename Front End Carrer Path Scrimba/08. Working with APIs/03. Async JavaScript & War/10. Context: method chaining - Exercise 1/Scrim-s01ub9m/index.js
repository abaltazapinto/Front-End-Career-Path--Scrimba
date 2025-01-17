/**
 * Challenge: method chaining!
 * 
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 * 
 * 2. Upcoming...
 */

document.getElementById("new-deck").addEventListener("click", function(){
    console.log("WoW man im really a savage!!!!! ")
})

// document.getElementById("new-deck").addEventListener("click", function() {
//     console.log("Clicked!")
// })

const voters = [
    {name: "Joe", email: "joe@joe.com", voted: true},
    {name: "Jane", email: "jane@jane.com", voted: true},
    {name: "Bo", email: "bo@bo.com", voted: false},
    {name: "Bane", email: "bane@bane.com", voted: false}
]

// Write your code below

const votersPerson = voters.filter(person => person.voted === true);

const mailOfVoters = votersPerson.map(mail => mail.email);

document.write(mailOfVoters);
// Final result: ["joe@joe.com", "jane@jane.com"]

// Their response method chaining you forgot. 
// // Write your code below
// const finalResult = voters.filter(voter => voter.voted).map(voter => voter.email)