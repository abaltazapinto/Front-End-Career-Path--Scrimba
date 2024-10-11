// script.js
import { menuArray } from "./data.js";


// Handle dark mode toggle
const toggle = document.getElementById('darkmode-toggle')
toggle.setAttribute('aria-label', 'Toggle between the two theme possibles dark and light')
toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', toggle.checked)
})


//handle the carousel
const buttons = document.querySelectorAll("[data-carousel-button]")
if (buttons) {  
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1 || button.dataset.carouselButton === "prev" ? 1 : 2;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        activeSlide.setAttribute('aria-label', `The magic plates of our Restaurant`)

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

//hanle the object menu
console.log(menuArray)
menuArray.forEach((item, e) => {
    const menuSection = document.getElementById('menu-items');

    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-items");

    const imgItem = document.createElement('img');
    imgItem.setAttribute('loading', 'lazy')
    imgItem.setAttribute(`aria-label`, `Image of ${item.name}`)
    imgItem.classList.add('img-item')
    
    imgItem.src = `${item.image}`
    imgItem.alt = item.name;

    const wrapImgPlus = document.createElement('div')
    wrapImgPlus.classList.add('wrappedItems')

    const itemSolo = document.createElement('div')
    itemSolo.classList.add('description')    
    const ariaName = item.name

    const itemName = document.createElement('h3');
    itemName.setAttribute('aria-label', `Choose one ${ariaName}`)
    itemName.textContent = item.name;

    const itemIngredients = document.createElement('p');
    itemIngredients.textContent = item.ingredients.join(', ')
    const itemING = item.ingredients.join(', ')
    itemIngredients.setAttribute('aria-label', `This ${ariaName} has this ingredients ${itemING}`)

    const itemPrice = document.createElement('p');
    const ariaPrice = item.price;
    itemPrice.setAttribute('aria-label', `The price of your item is ${ariaPrice}`)
    itemPrice.classList.add('price')
    itemPrice.textContent = `$${item.price}`;

    const button = document.createElement('div')
    button.classList.add('plus')

    const addButton = document.createElement('button')
    addButton.id = 'button+'
    addButton.textContent = "+";
    addButton.setAttribute('aria-label', `Add ${ariaName} to your plate`)
    addButton.classList.add('plus-button')
    
    //append everything
    menuItem.appendChild(imgItem);
    menuItem.appendChild(itemSolo)
    menuItem.appendChild(button)
    button.appendChild(addButton)
    
    menuItem.appendChild(wrapImgPlus)
    wrapImgPlus.appendChild(itemSolo);
    wrapImgPlus.appendChild(addButton)
    itemSolo.appendChild(itemName)
    itemSolo.appendChild(itemIngredients);
    itemSolo.appendChild(itemPrice)


    menuSection.appendChild(menuItem)
})

// handle the Order

let orderList = [];

function initializeMenuButtons() {

    document.querySelectorAll('.plus-button').forEach(button => {
        button.addEventListener('click', (e) => {
            
            const menuItem = e.target.closest('.menu-items');
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;

            const orderItem = {
                name: itemName,
                price: parseFloat(itemPrice.replace('$',''))
            };

            orderList.push(orderItem);
            updateOrder();
            document.querySelector('#complete-order').addEventListener('click', initializeCardDetails)
        });
    });
    
}

function updateOrder() {
    const orderSection = document.querySelector('.order-section')
    orderSection.textContent = '';
    const groupedArticles = document.createElement('div')
    groupedArticles.classList.add('grouped-articles')
    //group identical items
    const groupedOrder = orderList.reduce((acc, item) => {
        if (!acc[item.name]) {
            acc[item.name] = { ...item, quantity: 1 };
        } else {
            acc[item.name].quantity += 1;
            acc[item.name].price += item.price;
        }
        return acc;
    }, {});
    let totalPrice = 0;
    //treat the Object created
    Object.values(groupedOrder).forEach(item => {
        const orderItemDiv = document.createElement('div');
        orderItemDiv.classList.add('name-product')
        
        const itemSpanNumber = document.createElement('span')
        itemSpanNumber.classList.add('product-number')

        itemSpanNumber.textContent = `${item.quantity}`
        const itemNameSpan = document.createElement('span');
        itemNameSpan.classList.add('product-name');
        itemNameSpan.textContent = `${item.name} x${item.quantity}`
        itemNameSpan.setAttribute('aria-label',`You are ordering: ${itemNameSpan.textContent}`)
        
        const itemPriceSpan = document.createElement('span');
        itemPriceSpan.classList.add('product-price');
        itemPriceSpan.textContent = `$${item.price.toFixed(2)}`
        itemPriceSpan.setAttribute('aria-label',`The price of your ${itemNameSpan.textContent} is ${itemPriceSpan.textContent}`)


        orderItemDiv.appendChild(itemNameSpan);

        orderItemDiv.appendChild(itemPriceSpan);
        orderSection.appendChild(groupedArticles)
        groupedArticles.appendChild(orderItemDiv)

        totalPrice += item.price;
    })

    // Add total price
    const totalPriceDiv = document.createElement('div');
    totalPriceDiv.classList.add('total-price');
    totalPriceDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
    totalPriceDiv.setAttribute('aria-label',`You will pay in total ${totalPriceDiv.textContent}`)
    orderSection.appendChild(totalPriceDiv)

    const buttonOrder = document.createElement('button')
    buttonOrder.id = ('complete-order')
    buttonOrder.classList.add('complete-order')
    buttonOrder.setAttribute('aria-label', 'button that onclick will go to the modal to pay your complete order')
    buttonOrder.textContent = `Complete order`
    orderSection.appendChild(buttonOrder)
}

initializeMenuButtons();

// handle the completeOrder Function

function initializeCardDetails() {
    
    const sectionPayementByCard = document.createElement('section');
    sectionPayementByCard.classList.add('section-payment');
  
    const mainPayementByCard = document.createElement('main')
    mainPayementByCard.classList.add('main-payment');
    
    const modalContent = document.createElement('form');
    const modalText = document.createElement('h2')
    modalText.textContent = `Enter card details`;
    modalText.setAttribute('aria-label', `Enter your card details input`)
    modalContent.classList.add('modal-content');
    modalContent.id = 'paymentForm'
    
    modalContent.appendChild(modalText)
    // create name
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter your name');
    nameInput.setAttribute('aria-label',`Enter your name in this input`)
    nameInput.id = 'card-name'
    nameInput.classList.add('card-name');
    nameInput.setAttribute('required', 'true')
    modalContent.appendChild(nameInput)
    

    // create card
    const cardNumberInput = document.createElement('input');
    cardNumberInput.setAttribute('type', 'text');
    cardNumberInput.setAttribute('placeholder', 'Enter card number');
    cardNumberInput.setAttribute('aria-label',`Enter your card number in this input`)
    cardNumberInput.classList.add('card-number');
    cardNumberInput.setAttribute('required', 'true')
    modalContent.appendChild(cardNumberInput)

    //create Cvv 
    const cvvInput = document.createElement('input');
    cvvInput.setAttribute('type', 'text')
    cvvInput.setAttribute('placeholder', 'Enter CVV')
    cvvInput.setAttribute('required', true)
    cvvInput.setAttribute('aria-label',`Enter card CVV in this input`)
    cvvInput.classList.add('card-cvv')
    modalContent.appendChild(cvvInput)

    // create pay button
    const buttonPay = document.createElement('button')
    buttonPay.classList.add('complete-payment')
    buttonPay.textContent = 'Pay'
    buttonPay.setAttribute('aria-label', 'Pay the bill with your card')
    buttonPay.addEventListener('click', function(event) {

        if(cvvInput.checkValidity() && cardNumberInput.checkValidity() && nameInput.checkValidity()) {
            handleCompleteOrder();
        } else {
            event.preventDefault();
            alert('Please fill in all required fields');
        }
    });

    mainPayementByCard.appendChild(modalContent);
    mainPayementByCard.appendChild(buttonPay)

    sectionPayementByCard.appendChild(mainPayementByCard)

    document.body.appendChild(sectionPayementByCard)
}

// add an event listener to plot the modal 
function handleCompleteOrder(){
    const sectionTotal = document.querySelector('.section-payment')
    sectionTotal.classList.add('hidden')
    const sectionOrder = document.querySelector('.order-section')
    const nameInput = document.querySelector('.card-name')
    sectionOrder.textContent = `Thanks, ${nameInput.value}! Your order is on its way!`
    sectionOrder.classList.add('good-bye')

}

