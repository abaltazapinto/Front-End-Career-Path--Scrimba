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

let currentIndex = 0;
const selectedItems = [];

const carousel = document.getElementById('carousel');
const addToInvoiceBtn = document.getElementById('addToInvoiceBtn');
const selectedItemsList = document.getElementById(selectedItems)
const totalAmount = document.getElementById('totalAmount');

let startX, currentTranslate = 0, prevTranslate = 0, isDragging = false;

function initCaroussel() {
    workItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'carousel-item');
        div.innerHTML = `
            <h2>${item.price}</h2>
            <p>$${item.price}</p>
        `;
        carousel.appendChild(div)
    })
}

function setPositionByIndex() {
    currentTranslate = currentIndex * -100;
    prevTranslate = currentTranslate;
    setCarouselPosition();
}

function setCarouselPosition() {
    carousel.style.transform = `translateX(${currentTranslate}%)`
}

function touchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
    carousel.style.transition = 'none'
}

function touchMove(event) {
    if(isDragging) {
        const currentX = event.touches[0].clientX
        const diff = startX - currentX;
        currentTranslate = prevTranslate - diff / carousel.offsetWidth * 100;
        setCarouselPosition();
    }
}

function addToInvoice() {
    const item = workItems[currentIndex];
    selectedItems.push(item);
    updateInvoice();
}

function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -20 && currentIndex > 0) currentIndex -=1;
    if (movedBy < 20 && currentIndex < workItems.length -1) currentIndex +=1;
    setPositionByIndex();
    updateInvoice();
}

function updateInvoice() {
    selectedItems.innerHTML = '';
    let total = 0; 
    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        selectedItems.appendChild(li);
    });
    totalAmount.textContent = `Total: $${total}`

    initCaroussel();
    setPositionByIndex();

    carousel.addEventListener('touchstart', touchStart);
    carousel.addEventListener('mousedown', touchStart);
    carousel.addEventListener('touchmove', touchMove);
    carousel.addEventListener('mousedown', touchMove);
    carousel.addEventListener('touchend', touchEnd);
    carousel.addEventListener('mouseup', touchEnd);
    carousel.addEventListener('mouseleave',touchEnd);
    addToInvoiceBtn.addEventListener('click', addToInvoice);
}