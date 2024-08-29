import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-caec7-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let key in leads) {
        listItems += `
            <li>
                <a target='_blank' rel="noopener noreferrer"  href='${leads[key]}'>
                    ${leads[key]}
                </a>
                <button class='delete-btn' data-key='${key}'><i class="fas fa-trash"></i></button>
            </li>
        `
    }
    ulEl.innerHTML = listItems

    const deleteButtons = document.getElementsByClassName('delete-btn');
    console.log("delete buttons", deleteButtons)
    Array.from(deleteButtons).forEach(button => {
        console.log("clicked")
        button.addEventListener('click', function() {
            console.log("clicked")
            const leadKey = button.getAttribute('data-key');
            console.log('key to delete:', leadKey)
            deleteLead(leadKey);
        });
    });
}

// Challenge: Log out a snapshot of your database when a new value is added to it
onValue(referenceInDB, function(snapshot) {
    const snapshotValues = snapshot.val()
    // Challenge: Create a const called 'leads' which is an array containing the values inside of the snapshotValues object
    const leads = snapshotValues ? snapshotValues : {}
    console.log('Leads snapshot', leads)
     // Challenge: Use the render function with 'leads' to render the leads in the app
     render(leads)
})

function deleteLead(key) {
    console.log("Attempting to delete lead with key:", key);
    const leadRef = ref(database, `leads/${key}`);
    console.log("Firebase reference to delete:", leadRef);

    remove(leadRef)
        .then(() => {
        console.log('Lead removed sucessfully');
        })
        .catch(error => 
        {
            console.error('Error removing lead')
        }
    )    
}

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = "" 
})