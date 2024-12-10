// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
  update,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { colleagues, populateSelectOptions } from "./colleagues.js";

const appSettings = {
  databaseURL:
    "https://endorsementsapp-e8b8c-default-rtdb.europe-west1.firebasedatabase.app",
};

const fromColeagueSelect = document.getElementById("fromColeague");
const toColeagueSelect = document.getElementById("toColeague");
const inputFieldEl = document.getElementById("greetingsTo");
const addBtn = document.getElementById("add-button");
const EndorsementsListEl = document.getElementById("endorsements-List");

populateSelectOptions(fromColeagueSelect, colleagues);
populateSelectOptions(toColeagueSelect, colleagues);

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsInDB = ref(database, "endorsements");

onValue(endorsementsInDB, function (snapshot) {
  if (snapshot.exists()) {
    let itemsArray = Object.entries(snapshot.val());
    clearEndorsementsListEl();
    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];
      appendToEndorsementListEl(currentItem);
    }
  } else {
    EndorsementsListEl.innerHTML = "No items here... yet";
  }
});

addBtn.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  let fromValue = fromColeagueSelect.value;
  let toValue = toColeagueSelect.value;

  if (!inputValue || !fromValue || !toValue) {
    alert("Please fill all fields");
    return;
  }

  //change to the firebase to store the values correctly.
  push(endorsementsInDB, {
    text: inputValue,
    from: fromValue,
    to: toValue,
    likes: 0,
  });
  clearInputFieldEl();
});

function removeEndorsement(itemID, newEl) {
  let exactLocationOfItemInDB = ref(database, `endorsements/${itemID}`);
  console.log(itemID);
  remove(exactLocationOfItemInDB)
    .then(() => {
      // Remove from DOM after successful removal from Firebase
      newEl.remove();
      console.log("deletion success");
    })
    .catch((error) => {
      console.error("Error removing endorsement: ", error);
    });
}

function clearEndorsementsListEl() {
  EndorsementsListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendToEndorsementListEl(inputValue) {
  const itemID = inputValue[0];
  let itemData = inputValue[1];
  let itemValue =
    itemData.text.charAt(0).toUpperCase() +
    itemData.text.slice(1).toLowerCase();
  let fromValue =
    itemData.from.charAt(0).toUpperCase() +
    itemData.from.slice(1).toLowerCase();
  let toValue =
    itemData.to.charAt(0).toUpperCase() + itemData.to.slice(1).toLowerCase();
  let likeCount = itemData.likes;
  let newEl = document.createElement("li");
  newEl.innerHTML = `
            <strong>To: ${toValue}</strong><br>
            ${itemValue}<br>
            <em>From: ${fromValue}</em><br>
            <img src="./assets/60993.png" class="like-button" alt="Like Button" style="width: 20px; height: 20px; cursor: pointer;">
            <span class="like-count">${likeCount}</span>
        `;
  newEl.addEventListener("dblclick", function () {
    removeEndorsement(itemID, newEl);
  });

  EndorsementsListEl.append(newEl);
}

EndorsementsListEl.addEventListener("click", function (event) {
  if (event.target.classList.contains("like-button")) {
    const listItem = event.target.closest("li");
    const itemID = listItem.dataset.id;
    const likeCountEl = listItem.querySelector(".like-count");
    let likeCount = parseInt(likeCountEl.textContent) + 1;

    update(ref(database, `endorsements/${itemID}`), { likes: likeCount });
    likeCountEl.textContent = likeCount;
  }
});
