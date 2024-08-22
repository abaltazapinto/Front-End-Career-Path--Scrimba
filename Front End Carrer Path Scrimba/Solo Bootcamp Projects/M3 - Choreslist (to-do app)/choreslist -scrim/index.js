import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
import { getDatabase , ref, push } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js"

// 

const firebaseConfig = {
    databaseURL: "https://chorelist-e6d57-default-rtdb.europe-west1.firebasedatabase.app/"
}



const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceinDB = ref(database, "chorelist")


let inputEl = document.querySelector("#input-el")
const addChoreBtn = document.querySelector(".add-chore-list-btn")

addChoreBtn.addEventListener("click", function() {
    push(referenceinDB, inputEl.value)
    inputEl = ""
})

// const removeAllBtn= document.querySelector(".delete-btn")




// //const app = initializeApp(appSettings);
// const database = getDatabase(app)
// const endorsementsInDB = ref(database, "endorsements")

// function addToDo() {
//     console.log("clicked")
// }
// console.log(myTodos)

// function removeAll() {
//     console.log("remove")
// }
// addChoreBtn.addEventListener("click",addToDo)
// removeAllBtn.addEventListener("click", removeAll)

// const inputText = document.querySelector("#list-app")
// inputText.value = `hello`

// console.log(inputText)

// /* creating the new li for the to do app */



// let newEl = document.createElement('li');
//     //create the content for doing
//     newEl.innerHTML = `
    
//     `;

