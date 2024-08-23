import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
import { getDatabase , ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://chorelist-e6d57-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceinDB = ref(database, "chorelist")

let inputEl = document.querySelector("#input-el")
const ulEl = document.getElementById("ul-el")
const addChoreBtn = document.querySelector(".add-chore-list-btn")
const deleteAllButtonEl = document.getElementById("delete-btn")

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
        if (checkbox){
            checkbox.addEventListener("change", () => hideItemDelayed(i))
        }else {
            console.error(`Element with id toDo-${i} not found`)
        }
    }
}

onValue(referenceinDB, function (snapshot) {
    
    if(snapshot) {
        const snapshotValues = snapshot.val()
        const myTodos = Object.values(snapshotValues)
        render(myTodos)
    }
})

deleteAllButtonEl.addEventListener("dblclick", function() {
    remove(referenceinDB)
    ulEl.innerHTML = "";
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
             if(item) {
                removeItemFromFirebase(index)
                item.remove();
             } else {
                console.error(`Element with id item-${index} not found after delay`)
             }
        },3000)
    }
}

function removeItemFromFirebase(index) {
    const chorelistRef = ref(database, 'chorelist');
    onValue(chorelistRef, (snapshot) => {
        const data = snapshot.val();
        Object.entries(data).forEach(([key, value], i) => {
            if (i === index) {
                const itemRef = ref(database, `chorelist/${key}`)
                remove(itemRef)
                .then(() => {
                    console.log(`Item with index ${index} has been removed from Firebase`)
                })
                .catch(error => {
                    console.error(`Failed to remove item from Firebase: ${error}`)
                });
            }
        })
    }); 
}

const darkModeToggle = document.getElementById("darkmode-toggle")

darkModeToggle.addEventListener("click", changeDarkMode)

function changeDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode")
    }else {
        document.body.classList.add("dark-mode")
    }
}