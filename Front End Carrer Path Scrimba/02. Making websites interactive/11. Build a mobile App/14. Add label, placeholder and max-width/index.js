import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-caec7-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' rel="noopener noreferrer"  href='${leads[i]}'>
                    ${leads[i]}
                </a>
                <button class='delete-btn' data-index='${i}'><i class="fas fa-trash"></i></button>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

// Challenge: Log out a snapshot of your database when a new value is added to it
onValue(referenceInDB, function (snapshot) {
  const snapshotValues = snapshot.val();
  // Challenge: Create a const called 'leads' which is an array containing the values inside of the snapshotValues object
  const leads = Object.values(snapshotValues);
  console.log(leads);
  // Challenge: Use the render function with 'leads' to render the leads in the app
  render(leads);
});

deleteBtn.addEventListener("dblclick", function () {});

inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
