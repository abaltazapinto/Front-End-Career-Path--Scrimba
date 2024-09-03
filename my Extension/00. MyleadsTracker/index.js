import { initializeApp } from "./js/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "./js/firebase-database.js"

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
const tabBtn = document.getElementById("tab-btn");

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

onValue(referenceInDB, function(snapshot) {
    const snapshotValues = snapshot.val()
    const leads = snapshotValues ? snapshotValues : {}
    console.log('Leads snapshot', leads)
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

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tabUrl = tabs[0].url;
        push(referenceInDB, tabUrl);
    });
});