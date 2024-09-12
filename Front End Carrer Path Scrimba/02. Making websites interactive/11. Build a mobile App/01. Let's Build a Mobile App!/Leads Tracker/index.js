import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-caec7-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
                <button class='delete-btn' data-index='${i}'><i class="fas fa-trash"></i></button>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
  addDeleteButtonListeners();
}

function addDeleteButtonListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      myLeads.splice(index, 1);

      render(myLeads);
    });
  });
}

deleteBtn.addEventListener("dblclick", function () {
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  console.log(inputEl.value);
  inputEl.value = "";
});
