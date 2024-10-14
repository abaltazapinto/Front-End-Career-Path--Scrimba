import { workItems } from './assets/workItems.js'

// Handle dark mode toggle
const toggle = document.getElementById("darkmode-toggle");
console.log("toggle", toggle)
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
const selectedItemsList = document.getElementById('selected-items');
const totalAmount = document.getElementById('total-amount')
const sendInvoiceBtn = document.getElementById('send-invoice-btn');

let currentIndex = 0;
const itemsPerPage = 3;
const itemsToSlide = 1;
let selectedItems = [];

// carousel
function initCarousel() {
    carousel.innerHTML = '';
    workItems.forEach((item, index) => {
        const button = document.createElement('button');
        button.classList.add('service-btn');
        button.textContent = `${item.name}: $${item.price}`;
        button.addEventListener('click', () => addToInvoice(index));
        carousel.appendChild(button);
    });
    updateCarousel();
}

function updateCarousel() {
    const items = carousel.querySelectorAll('.service-btn');
    console.log(items)

    items.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + itemsPerPage) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function addToInvoice(index) {
    const item = workItems[index]
    if(selectedItems.some(selectedItem => selectedItem.name === item.name)) {
    selectedItems.push(item);
    updateInvoice();
    }
}

function updateInvoice() {
    selectedItems.innerHTML = '';
    let total = 0;
    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${item.name}</span>
        <span class="remove-btn" data-name="${item.name}">Remove</span>
        <span>$${item.price}</span>
        `
        selectedItems.appendChild(li);
        total += item.price;
    });
    totalAmount.textContent = `Total: $${total}`;

//add event listeners to remove buttons
selectedItemsList.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener(click, (e) => {
        const itemName = e.target.getAttribute('data-name');
        selectedItems = selectedItems.filter(item => item.name !== itemName);
        updateInvoice();
        })
    });
}

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

// carousel.addEventListener('click', (e) => {
//     if(e.target.classList.contains('add-btn')) {
//         const index = parseInt(e.target.dataset.index);
//         addToInvoice(index)
//     }
// });

sendInvoiceBtn.addEventListener('click', () => {
    console.log('Sending invoice...', selectedItems)
    // implement the rest here
    alert('Invoice sent!');
    selectedItems = [];
    updateInvoice();
});

initCarousel();

//First try carousel

// let currentIndex = 0;
// const selectedItems = [];

// const carousel = document.getElementById('carousel');
// const addToInvoiceBtn = document.getElementById('addToInvoiceBtn');
// const selectedItemsList = document.getElementById('selectedItems');
// console.log("selected Items", selectedItemsList)
// const totalAmount = document.getElementById('totalAmount');

// let startX, currentTranslate = 0, prevTranslate = 0, isDragging = false;

// function initCarousel() {
//     carousel.innerHTML = ''; // Clear existing items
//     workItems.forEach((item, index) => {
//         const div = document.createElement('div');
//         div.setAttribute('class', 'carousel-item');
//         div.innerHTML = `
//             <h2>${item.name}</h2>
//             <p>$${item.price}</p>
//             <button class="add-btn" data-index="${index}>Add</button>
//         `;
//         carousel.appendChild(div)
//     })
// }

// function setPositionByIndex() {
//     currentTranslate = currentIndex * -100;
//     prevTranslate = currentTranslate;
//     setCarouselPosition();
// }

// function setCarouselPosition() {
//     carousel.style.transform = `translateX(${currentTranslate}%)`
// }

// function touchStart(event) {
//     startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
//     isDragging = true;
//     carousel.style.transition = 'none'
// }

// function touchMove(event) {
//     if(isDragging) {
//         const currentX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
//         const diff = startX - currentX;
//         currentTranslate = prevTranslate - diff / carousel.offsetWidth * 100;
//         setCarouselPosition();
//     }
// }

// function addToInvoice() {
//     const item = workItems[currentIndex];
//     selectedItems.push(item);
//     updateInvoice();
// }

// function touchEnd() {
//     isDragging = false;
//     const movedBy = currentTranslate - prevTranslate;

//     if (movedBy < -20 && currentIndex > 0) currentIndex -= 1;
//     if (movedBy > 20 && currentIndex < workItems.length - 1) currentIndex += 1;
//     setPositionByIndex();
//     carousel.style.transition = 'transform 0.3s ease-out';
// }

// function updateInvoice() {
//     while (selectedItemsList.firstChild) {
//         selectedItemsList.removeChild(selectedItemsList.firstChild)    
//     }

//     let total = 0;
//     selectedItems.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = `${item.name} - $${item.price}`;
//         selectedItemsList.appendChild(li);
//         total += item.price;
//     });
//     totalAmount.textContent = `Total: $${total}`
// }

// // Initialize the carousel and set up event listeners
// initCarousel();
// setPositionByIndex();

// carousel.addEventListener('touchstart', touchStart);
// carousel.addEventListener('mousedown', touchStart);
// carousel.addEventListener('touchmove', touchMove);
// carousel.addEventListener('mousemove', touchMove);
// carousel.addEventListener('touchend', touchEnd);
// carousel.addEventListener('mouseup', touchEnd);
// carousel.addEventListener('mouseleave', touchEnd);
// addToInvoiceBtn.addEventListener('click', addToInvoice);