import { workItems } from './assets/workItems.js'

// Handle dark mode toggle
const toggle = document.getElementById("darkmode-toggle");
toggle.setAttribute(
  "aria-label",
  "Toggle between the two theme possibles dark and light",
);

toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", toggle.checked);
});

const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
// const workItemsList = document.getElementById('selected-items');
const totalAmount = document.getElementById('total-amount')
const sendInvoiceBtn = document.getElementById('send-invoice-btn');

let currentIndex = 0;
const itemsPerPage = 3;
const itemsToSlide = 1;
let selectedItems = [];

const workItemsList = document.querySelectorAll('.service-btn')

// carousel
function initCarousel() {
    carousel.innerHTML = '';
    workItems.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add('service-btn');
        button.textContent = `${item.name}: $${item.price}`;
        button.addEventListener('click', handleItemClick);
        carousel.appendChild(button);
    });
    updateCarousel();
}

function updateCarousel() {
    const items = carousel.querySelectorAll('.service-btn');
    items.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + itemsPerPage) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function handleItemClick(event) {
    const button = event.target;
    const itemName = button.textContent.split(':')[0].trim();
    console.log("item name:" , itemName)
    
    const items = workItems.find(item => item.name === item.name);
    const item = items.length > 0 ? items[0] : null;
    console.log("item do metodo find found", item)

    if (itemName) {
        console.log('Clicked item', item);
        addToInvoice(item);
    } else {
        console.error('Item not found:', itemName);
    }
}

console.log(event)
function addToInvoice(clickedItem) {
    const existingIndex = selectedItems.findIndex(item => item.name === clickedItem.name);

    if (existingIndex === -1) {
        // Item not in list, add it
        selectedItems.push({ ...clickedItem, count: 1 }); // Use spread operator to keep the item properties and add count
    } else {
        // Item already in the list, increment count
        selectedItems[existingIndex].count += 1; // Increment the count for the existing item
    }

    console.log('Selected items:', selectedItems); // Debugging line to check selected items
    updateInvoice(); // Update the invoice display
}




// create the invoice

sendInvoiceBtn.addEventListener('click', () => {
    console.log('Sending invoice...', selectedItems)
    // implement the rest here
    alert('Invoice sent!');
    selectedItems = [];
    // updateInvoice();
    updateInvoice();
});


function updateInvoice(clickedItem) {
const taskList = document.getElementById('task')
const taskTotal = document.getElementById("task-total")
const totalAmount = document.getElementById("totalAmount");
console.log("total Amount", totalAmount)

taskList.innerHTML = '';
taskTotal.innerHTML = '';
totalAmount.innerHTML = '';

let total = 0;

selectedItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} x${item.count}`;
    taskList.appendChild(listItem)

    const itemTotal = item.price * item.count;
    total += itemTotal;
})

// Update total amount
totalAmount.textContent = `$${total}`;

};

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= itemsToSlide;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex + itemsPerPage < workItems.length) {
        currentIndex += itemsToSlide;
        updateCarousel();
    }
});

initCarousel();
