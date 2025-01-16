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

/**
 * Challenge: 
 * 
 * Part 1: Given the array of objects below, create a new array with the `.filter()` array method that contains only the objects where "hasPet" is true
 * 
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */

const people = [
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

const peopleWithPets = people.filter(person => person.hasPet === true
);

console.log(peopleWithPets);

/**
 * Extra challenge to practice array.filter:
 * 
 * Using .filter, create a new array of people who are 18 and older
 * (should be Jill, Alice, and Bob)
 */

const olderThan18 = people.filter(eighteen => eighteen.age >= 18);

console.log(olderThan18);