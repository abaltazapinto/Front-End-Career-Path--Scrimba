// script.js
import { menuArray } from "./data.js";

console.log(menuArray)
menuArray.forEach(item => {
    const menuSection = document.querySelector('.container');

    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-items");

    const imgItem = document.createElement('img');
    imgItem.classList.add('img-item')
    
    imgItem.src = `${item.image}`
    imgItem.alt = item.name;

    const itemSolo = document.createElement('div')
    itemSolo.classList.add('description')
    
    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const itemIngredients = document.createElement('h6');
    itemIngredients.textContent = item.ingredients.join(', ')

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('price')
    itemPrice.textContent = `$${item.price}`;

    const buttonPlus = document.createElement('button')
    buttonPlus.textContent = "+";
    buttonPlus.classList.add('plus-button')
    
    //append everything
    menuItem.appendChild(imgItem);
    menuItem.appendChild(itemSolo)
    menuItem.appendChild(buttonPlus)
    itemSolo.appendChild(itemName)
    itemSolo.appendChild(itemIngredients);
    itemSolo.appendChild(itemPrice)

    menuSection.appendChild(menuItem)
})



//handle the carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

if (buttons) {  
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1 || button.dataset.carouselButton === "prev" ? 1 : 2;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")

                    // Ensure slides only contain elements that are `li.slide`
         const slideArray = Array.from(slides.children).filter(child => child.classList.contains('slide'));
        let currentIndex = slideArray.indexOf(activeSlide)
         // Log if we detect an issue
         if (currentIndex === -1) {
            console.error("Error: Active slide not found in slide array.");
            return; // Exit the function if there's an issue
        }
        let newIndex = currentIndex + offset
        if(newIndex < 0) {
            newIndex = slides.children + 1
        }
        if(newIndex >= slides.children.length) {
            newIndex = 0
        }
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
}
)
}

// Handle dark mode toggle
const toggle = document.getElementById('darkmode-toggle')
toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', toggle.checked)
})

