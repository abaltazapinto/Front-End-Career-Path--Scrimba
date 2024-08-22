import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
import { getDatabase , ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js"

// 

const firebaseConfig = {
    databaseURL: "https://chorelist-e6d57-default-rtdb.europe-west1.firebasedatabase.app/"
}



const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceinDB = ref(database, "chorelist")


let inputEl = document.querySelector("#input-el")
const addChoreBtn = document.querySelector(".add-chore-list-btn")
const ulEl = document.getElementById("ul-el")

function render(myTodos) {
    let listTodos = ""
    for (let i = 0; i < myTodos.length; i++) {
        listTodos += `
            <li id="item-${i}">
                ${myTodos[i]}
                <input type="checkbox" id="toDo-${i}" /> 
            </li>
        `
    }
    ulEl.innerHTML = listTodos

    for (let i = 0; i < myTodos.length; i++) {
        const checkbox = document.getElementById(`toDo-${i}`);
        console.log(`Adding listener to #toDo-${i}`, checkbox);

        if (checkbox){
            checkbox.addEventListener("change", () => hideItemDelayed(i))
        }else {
            console.error(`Element with id toDo-${i} not found`)
        }
    }

}

onValue(referenceinDB, function (snapshot) {
    const snapshotValues = snapshot.val()
    const myTodos = Object.values(snapshotValues)
    render(myTodos)
    console.log(myTodos)
})


addChoreBtn.addEventListener("click", function() {
    push(referenceinDB, inputEl.value)
    inputEl.value = ""
})

// To hide and remove when a checkbox is active

function hideItemDelayed(index) {
    const item = document.getElementById(`item-${index}`)
    const checkbox = document.getElementById(`toDo-${index}`);

    if(checkbox && checkbox.checked) {
        setTimeout(() => {
            console.log(`Trying to remove item-${index}`);
            console.log("item", item)
             if(item) {
                item.remove();
             } else {
                console.error(`Element with id item-${index} not found after delay`)
             }
        },3000)
    }
}



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

