
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
        if (existingItem.count === 0 && existingItem.count === 1){
            existingItem.count = itemCounts[itemName];
            existingItem.totalPrice = existingItem.count * existingItem.price;
        }

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
    
    if(existingItem) {

        const grabContainer = document.getElementById('container')
        
        // alert(`You have already a ${itemName} you want another one ? ` )
        const sectionWarningDetails = document.createElement("section")
        sectionWarningDetails.classList.add('warning-details') 

        const mainWarningArea = document.createElement('main')
        mainWarningArea.classList.add('main-Warning-area')

        const areaButtons = document.createElement('div');
        areaButtons.classList.add('area-buttons')

        const closeButton = document.createElement('span');
        closeButton.classList.add('close')
        

        //close the modal on clicking the close button
        closeButton.onclick = function () {
            modalWarningQuestion.style.display = 'none';
        }


        const modalWarningQuestion = document.createElement('h2')
        modalWarningQuestion.textContent = DOMPurify.sanitize(`Do you want to add anoter ${itemName} to the services ?`)
        modalWarningQuestion.setAttribute('aria-label', "Question about the number of services need");
        
        grabContainer.appendChild(sectionWarningDetails)
        mainWarningArea.appendChild(modalWarningQuestion)
        mainWarningArea.appendChild(areaButtons)
   
        sectionWarningDetails.appendChild(mainWarningArea)

        const yesButton = document.createElement('button');
        yesButton.textContent = 'Yes';
        yesButton.onclick = function () {
            existingItem.count = itemCounts[itemName];
            existingItem.totalPrice = existingItem.count * existingItem.price;
            (function() {     
                console.log("came here")
                // taskContainer.innerHTML = '';
                // countContainer.innerHTML = '';
                // Iterate over `selectedItems` and add them to the container in the HTML
                for (let item of selectedItems) {
                        
                        if(item.count < 2) {
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

                            console.log("passed in the second component")
                            const totalCountElement = document.createElement('div');

                            totalCountElement.classList.add('item-count');
                            totalCountElement.classList.add(`data-${itemName}`);
                            // totalCountElement.id = `${item.name.toLowerCase().replace(/\s/g, '-')}-total`;
                            totalCountElement.textContent = `x ${item.count} - $${item.totalPrice.toFixed(2)}`
                            
                            countContainer.appendChild(itemCount);
                            itemCount.appendChild(totalCountElement)
                            taskDiv.appendChild(taskContainer)

                            console.log("item.count", item.count)

                            const totalItemsAmount = selectedItems.reduce((sum, item) => sum + item.totalPrice, 0)
                            document.getElementById('totalAmount').textContent =`$${totalItemsAmount.toFixed(2)}`;
                        } else {

                            existingTotalCountElement = document.querySelector(`data-${itemName}`);
                            console.log(existingTotalCountElement)
                            if(existingTotalCountElement) {
                                totalCountElement.innerHTML = '';
                                totalCountElement.textContent = `x ${item.count} - $${item.totalPrice.toFixed(2)}`
                            }    
                        }
            }
            
            sectionWarningDetails.style.display = 'none';
        })();
            // updateInvoice();

        }

        const noButton = document.createElement('button');
        noButton.textContent = 'No';
        noButton.onclick = function () {
            sectionWarningDetails.style.display = 'none';
        }

        areaButtons.appendChild(yesButton);
        areaButtons.appendChild(noButton);
        
            // Close the modal when clicking outside of it
            window.onclick = function (event) {
                if (event.target === window) {
                    mainWarningArea.style.display = 'none';
                }
            };
                
    }

    if (!existingItem) {
        taskContainer.innerHTML = '';
        countContainer.innerHTML = '';
    // Iterate over `selectedItems` and add them to the container in the HTML
    for (let item of selectedItems) {
        if(item.count >0 && item.count <2){
        // Create a new HTML element for each item (e.g., a 'div')
        const itemElement = document.createElement('div');
        itemElement.classList.add('item-element');
        // Create a separate element for the ite-name
        const itemNameElement = document.createElement('div')
        itemNameElement.classList.add('item-name');

        itemNameElement.textContent = `${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`;
        taskContainer.appendChild(itemElement);
        itemElement.appendChild(itemNameElement);

            console.log("passed in the second conponent")

        // Need to create a new span for the count and total price
        const itemCount = document.createElement('div')
        itemCount.classList.add('item-count');
        itemCount.classList.add(`data-${itemName}`);

        const totalCountElement = document.createElement('div');
        totalCountElement.classList.add('item-count');
            totalCountElement.textContent = `x ${item.count} - $${item.totalPrice.toFixed(2)}`
            countContainer.appendChild(itemCount);
            itemCount.appendChild(totalCountElement)
            taskDiv.appendChild(taskContainer)
            console.log("item.count", item.count)
            const totalItemsAmount = selectedItems.reduce((sum, item) => sum + item.totalPrice, 0)
            document.getElementById('totalAmount').textContent =`$${totalItemsAmount.toFixed(2)}`;
        }
        // for the total
        console.log(itemCounts && item.count)
    }
}
    
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
