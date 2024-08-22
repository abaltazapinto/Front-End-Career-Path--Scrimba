import { initializeApp } from "https://chorelist-e6d57-default-rtdb.europe-west1.firebasedatabase.app/"
import { getDatabase, ref, push, onValue, remove } from "https://chorelist-e6d57-default-rtdb.europe-west1.firebasedatabase.app/"


let myTodos = [];
const inputEl = document.querySelector("#input-el")
const addChoreBtn = document.querySelector(".add-chore-list-btn")
const removeAllBtn= document.querySelector(".delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("To-do"))


if (leadsFromLocalStorage) {
    myTodos = leadsFromLocalStorage
    /*render(myTodos)*/
}

function addToDo() {
    console.log("clicked")
}
console.log(myTodos)

function removeAll() {
    console.log("remove")
}
addChoreBtn.addEventListener("click",addToDo)
removeAllBtn.addEventListener("click", removeAll)

const inputText = document.querySelector("#list-app")
inputText.value = `hello`

console.log(inputText)

/* creating the new li for the to do app */



let newEl = document.createElement('li');
    //create the content for doing
    newEl.innerHTML = `
    
    `;

