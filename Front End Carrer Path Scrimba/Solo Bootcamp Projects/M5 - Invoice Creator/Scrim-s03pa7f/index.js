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
        button.setAttribute("aria-label", `${item.name} offered for ${item.price}`)
        button.textContent = `${item.name}: $${item.price}`;
        button.addEventListener('click', handleItemClick);
        carousel.appendChild(button);
    });
    renderCarousel();
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
    console.log("clicked")
}

function addToInvoice(e) {
    const button = e.target;
    console.log(button);
    let itemName = button.textContent.split(':')[0].trim();
    const itemPrice = Number(button.textContent.split('$')[1]?.trim());
    let priceNumber = itemPrice ? parseFloat(itemPrice) : 0; 
    if (!itemCounts[itemName]) {
        itemCounts[itemName] = 0; // Initialize count if not present
    }
    itemCounts[itemName]++;

    // Check if the item is already in selectedItems
    let existingItem = selectedItems.find(i => i.name === itemName);
    if (!existingItem) {
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
        modalWarningQuestion.textContent = DOMPurify.sanitize(`Do you want to add another ${itemName} to the services ?`)
        modalWarningQuestion.setAttribute('aria-label', "Question about the number of services need");
        grabContainer.appendChild(sectionWarningDetails)
        mainWarningArea.appendChild(modalWarningQuestion)
        mainWarningArea.appendChild(areaButtons)
        sectionWarningDetails.appendChild(mainWarningArea)
        const yesButton = document.createElement('button');
        yesButton.textContent = 'Yes';
        yesButton.onclick = function () {
        //get the count of the object associated with
            existingItem.count = itemCounts[itemName];
            //changing the total price of the item in question
            existingItem.totalPrice = existingItem.count * existingItem.price;
            (function() {     
                for (let item of selectedItems) {
                        const sanitizeItemName = item.name.toLowerCase().replace(/\s+/g,'-');    
                        if(item.count >= 1 ) {
                            const element = document.querySelector(`[data-${sanitizeItemName}]`);
                            if(element) {
                                element.innerHTML = '';
                                element.textContent = `x ${item.count} - $${item.totalPrice.toFixed(2)}`
                                const totalItemsAmount = selectedItems.reduce((sum, item) => sum + item.totalPrice, 0)
                                document.getElementById('totalAmount').textContent = `$${totalItemsAmount.toFixed(2)}`
                            }
                        }
            }      
            sectionWarningDetails.style.display = 'none';
        })();
        }
        const noButton = document.createElement('button');
        noButton.textContent = 'No';
        noButton.onclick = function () {
            sectionWarningDetails.style.display = 'none';
        }
        areaButtons.appendChild(yesButton);
        areaButtons.appendChild(noButton);
    } else {
    for (let item of selectedItems) {
        const sanitizeItemName = item.name.toLowerCase().replace(/\s+/g,'-');    
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
        // Need to create a new span for the count and total price
        const itemCount = document.createElement('div')
        itemCount.classList.add('item-count');
        const totalCountElement = document.createElement('div');
        // totalCountElement.classList.add('item-count');
        totalCountElement.classList.add(`data-${sanitizeItemName}`);
        totalCountElement.setAttribute(`data-${sanitizeItemName}`, sanitizeItemName)
        totalCountElement.textContent = `x ${item.count} - $${item.totalPrice.toFixed(2)}`
        countContainer.appendChild(itemCount);
        itemCount.appendChild(totalCountElement)
        taskDiv.appendChild(taskContainer)
        const totalItemsAmount = selectedItems.reduce((sum, item) => sum + item.totalPrice, 0)
        document.getElementById('totalAmount').textContent =`$${totalItemsAmount.toFixed(2)}`;
        }
    }
}}

let tasks = []
function addTask() {
        const taskInput = document.getElementById('task-input').value;
        const taskPrice = document.getElementById('task-price').value;
        

        if(taskInput && taskPrice) {
            workItems.push({
                name: taskInput,
                price: taskPrice
            }); 
            // clear the input after adding
            document.getElementById('task-input').value = '';
            renderCarousel()
        } else {
            alert('Please enter a task and select a price')
        }
}

document.querySelector(".add-work-btn").addEventListener('click', addTask)

function renderCarousel() {
    const carousel = document.getElementById('carousel');
    // Shoul i clean before ?
     carousel.innerHTML = '';
    // Loop over the tasks array ro remove the task
    workItems.forEach((task, index) => {
        const taskButton = document.createElement('button')
        taskButton.classList.add('service-btn')
        taskButton.setAttribute("aria-label", `${task.name} offered for ${task.price}`)
        // taskButton.setAttribute("style","display : none" )
        taskButton.innerText = `${task.name}: $${task.price}`
        // add a event listener to remove
        taskButton.addEventListener('dblclick', function() {
            removeTask(index);
            console.log(`${task.name} removed on double click`)
            console.log("dbclick")
            
        })
        taskButton.addEventListener('click', handleItemClick)
        carousel.appendChild(taskButton)
        updateCarousel();
    });
}
function sendInvoiceEmail() {
    // entering the input with the desired email
    let grabContainer = document.getElementById('container');
    const emailSection = document.createElement('section');
    emailSection.classList.add('email-details');
    const mainEmailRequested = document.createElement('main');
    mainEmailRequested.classList.add('main-recipient-email');
    const modalEmailQuestion = document.createElement('h2');
    modalEmailQuestion.textContent = DOMPurify.sanitize(`Do you want to receive the invoice of Confiplus by Email?`);

    const areaButtons = document.createElement('div');
    areaButtons.classList.add('area-email-buttons');

    const closeNOButton = document.createElement('button');
    closeNOButton.textContent = 'No'
    closeNOButton.classList.add('no-button')

    closeNOButton.classList.add('close');
    closeNOButton.onclick = function () {
        emailSection.style.display = 'none';
    };

    const yesButton = document.createElement('button');
    yesButton.textContent = "Yes";
    yesButton.classList.add('yes-button');

    grabContainer.appendChild(emailSection);
    emailSection.appendChild(mainEmailRequested);
    mainEmailRequested.appendChild(modalEmailQuestion);
    mainEmailRequested.appendChild(areaButtons);
    
    areaButtons.appendChild(closeNOButton);
    areaButtons.appendChild(yesButton);

    yesButton.onclick = function () {
        yesButton.style.display = 'none'
        closeNOButton.style.display = 'none'
        let existingEmailInput = document.getElementById('recipientEmail');
        
        if (!existingEmailInput) {
            const emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.id = 'recipientEmail';
            emailInput.classList.add('recipientEmail');
            emailInput.placeholder = 'Enter your personal email';
            emailInput.required = true;
            emailInput.style.margin = '20px 10px';
            emailInput.style.padding = '10px';
            emailInput.style.borderRadius ='10px'
            emailInput.style.width = 'fit-content'
            
            const emailLabel = document.createElement('label');
            emailLabel.setAttribute("for", "recipientEmail");
            emailLabel.textContent = 'Enter your email address';
            
            const submitEmailButton = document.createElement('button');
            submitEmailButton.style.fontSize = '28px';
            submitEmailButton.textContent = "Submit Email and Send Invoice";
            submitEmailButton.style.display = 'block';
            submitEmailButton.style.marginTop = '10px';
            submitEmailButton.style.padding = '10px';
            submitEmailButton.style.borderRadius ='10px'

            areaButtons.appendChild(emailLabel);
            areaButtons.appendChild(emailInput);
            areaButtons.appendChild(submitEmailButton);

            submitEmailButton.onclick = function () {
                const recipientEmail = document.getElementById('recipientEmail').value;
                const selectedItemsDetails = selectedItems.map(item => `${item.name}: ${item.count} x $${item.price.toFixed(2)} = $${item.totalPrice.toFixed(2)}`).join('\n');
                const totalAmount = document.getElementById('totalAmount').textContent;
            
                let invoiceData = {
                    to_email: recipientEmail,
                    to_name: "Customer",
                    from: "Confiplus", 
                    message: `Here are the details of your invoice:\n${selectedItemsDetails}\n\nTotal Amount: ${totalAmount}`
                };
            
                emailjs.send("service_nos1bvr", "template_ru1zke6", invoiceData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Invoice sent successfully!');
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Failed to send the invoice. Please try again.');
                });

                emailSection.style.display = 'none'
            };
            };
        }
    };



// Attach this to your send invoice button
document.getElementById('send-invoice-btn').addEventListener('click', sendInvoiceEmail);

function removeTask(index) {
    workItems.splice(index, 1);
    renderCarousel();
}


// create the invoice
sendInvoiceBtn.addEventListener('click', () => {
    // implement the rest here
    alert('Invoice sent!');
    alert('Reseting values')
    // // update browser
    // setTimeout(() => {
    //     window.location.reload()
    // }, 3500)
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
renderCarousel();
