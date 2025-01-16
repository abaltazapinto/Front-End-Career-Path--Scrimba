function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

// function callback() {
//     console.log("I finally ran!")
// }

// setTimeout(callback, 2000)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function gimmeThePets(number) {
//     return person.hasPet
// }

// const peopleWithPets = people.filter(gimmeThePets)
// console.log(peopleWithPets)


/**
 * Challenge: 
 * 
 * Write your own `filter` function! Don't worry about adding it to the prototype of arrays or anything.
 * This function should take 2 parameters:
 * 1. The array you want to filter through, and
 * 2. A callback function
 * 
 * Steps for filterArray function logic:
 * 1. Initialize a new, empty array which will be returned at the end of the `filterArray`s operations (Completed ✅)
 * 2. Loop through the array passed as the 1st parameter
 * 3. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
 * 4. If the callback function returns `true`, push the current item you're iterating on in the loop to the new array. If it returns `false`, don't push it to the array.
 * 5. When the loop is over, return the new array
 */

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function filterArray(array, callback) {
    let resultingArray = []
    // Write your filtering logic here
    resultingArray = array.filter(argument => argument.hasPet === true)
    return resultingArray;
}

// diferences between mine and the corrected version.
// mostly on the for loop and using callback(item)

function filter(array, callback) {
    const resultingArray = []
    for (let item of array) {
        if (callback(item)) {
            resultingArray.push(item);
        }
    }
    return resultingArray;
}

console.log(filterArray(people));
// We'll do this later
// const peopleWithPets = filterArray(people, /*???*/)


/*

Explanation of Improvements
Follow Challenge Instructions:

The filterArray function is now implemented without relying on the built-in .filter method. This aligns with the challenge's intent to create a custom filter function.
Reusable Callback:

By separating the callback function (hasPetCallback), you make your filterArray function reusable for any condition, not just filtering people with pets. It promotes flexibility and reusability.
Readable and Extensible:

Using a for...of loop makes the code more concise and readable compared to traditional for loops. It's also easy to extend if needed.
Separation of Concerns:

The filtering logic (callback) is separated from the filterArray function. This allows testing and reusing the callback independently.
Example with Another Condition
To demonstrate the flexibility of the revised implementation, you can filter people whose names start with "A":

javascript
Copy code
const startsWithA = (person) => person.name.startsWith("A");
console.log(filterArray(people, startsWithA));
This returns:

javascript
Copy code
[
    { name: "Alice", hasPet: true }
]
Key Takeaways
Avoid shortcuts like using .filter when the challenge explicitly asks for a manual implementation. It’s a great opportunity to practice fundamental concepts.
Design functions to be reusable and extensible by decoupling logic.
A custom filter function deepens your understanding of higher-order functions and callbacks.





*/
