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
const workItemsList = document.getElementById('selected-items');
const taskDiv = document.getElementById('task');
const totalDiv = document.getElementById('selected-items-count')
let totalAmount = document.getElementById('total-amount')
const sendInvoiceBtn = document.getElementById('send-invoice-btn');

//Initialize an object to store the counts for each item
const itemCounts = Object.fromEntries(workItems.map(item => [item.name.toLocaleLowerCase(), 0]))
const itemPrice = Object.values(workItems.map(item => [item.price], 0))
let currentIndex = 0;
const itemsPerPage = 3;
const itemsToSlide = 1;
let selectedItems = [];


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

function handleItemClick(e) {
    addToInvoice(e)
}

function addToInvoice(e) {
    const button = e.target;
    let itemName = button.textContent.split(':')[0].trim();
    const itemPrice = Number(button.textContent.split('$')[1]?.trim());
    let priceNumber = itemPrice ? parseFloat(itemPrice) : 0;

    // Update itemCounts for the clicked item
    if (!itemCounts[itemName]) {
        itemCounts[itemName] = 0; // Initialize count if not present
    }
    itemCounts[itemName]++;

    // Check if the item is already in selectedItems
    let existingItem = selectedItems.find(i => i.name === itemName);

    if (existingItem) {
        // Update count and total price if the item already exists
        existingItem.count = itemCounts[itemName];
        existingItem.totalPrice = existingItem.count * existingItem.price;
    } else {
        // If item doesn't exist, add it to selectedItems with initial count and total price
        selectedItems.push({
            name: itemName,
            count: itemCounts[itemName],
            price: itemPrice,
            totalPrice: itemPrice * itemCounts[itemName],
        });
    }

    // Update the HTML to display the selected items
    const taskContainer = document.getElementById('selected-items');
    const countContainer = document.getElementById('selected-items-count')
    // Clear the current contents of the container to avoid duplications
    taskContainer.innerHTML = '';
    countContainer.innerHTML = '';

    // Iterate over `selectedItems` and add them to the container in the HTML
    for (let item of selectedItems) {
        // Create a new HTML element for each item (e.g., a 'div')
        const itemElement = document.createElement('div');
        itemElement.classList.add('item-element');

        // Create a separate element for the ite-name
        const itemNameElement = document.createElement('div')
        itemNameElement.classList.add('item-name');
        itemNameElement.textContent = `${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`;

        taskContainer.appendChild(itemElement);
        itemElement.appendChild(itemNameElement);

        // Need to create a new span for the count and total price
        const itemCount = document.createElement('div')
        itemCount.classList.add('item-count')

        const totalCountElement = document.createElement('div');
        totalCountElement.classList.add('item-count');
        totalCountElement.textContent = `x ${item.count} - $${item.totalPrice.toFixed(2)}`

        countContainer.appendChild(itemCount);
        itemCount.appendChild(totalCountElement)
        taskDiv.appendChild(taskContainer)
        
    }
    
    // for the total
    const totalItemsAmount = selectedItems.reduce((sum, item) => sum + item.totalPrice, 0)
    document.getElementById('totalAmount').textContent =`$${totalItemsAmount.toFixed(2)}`;
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
