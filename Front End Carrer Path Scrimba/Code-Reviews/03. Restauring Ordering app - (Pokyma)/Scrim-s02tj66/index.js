import { menuArray } from "./data"

let cart = []

const modalEl = document.getElementById('payment-modal')
const successEl = document.getElementById('success')

document.addEventListener('click', (e) => {
    if (e.target.dataset.add){
        handleAddItemClick(Number(e.target.dataset.add))
        setTimeout(() => {
            e.target.blur()
        }, 500)
    }
    else if (e.target.id === 'order-btn'){
        e.preventDefault()
        handleCompleteOrderClick()
        setTimeout(() => {
            e.target.blur()
        }, 500)
    }
    else if (e.target.dataset.remove){
        handleRemoveItemClick(Number(e.target.dataset.remove))
    }
    else if (!modalEl.contains(e.target)){
        closeModal()
    }
})

// Handler functions
function handleAddItemClick(itemId) {
    cart.push(itemId)
    renderOrder()
    clearOrderSuccess()
}

function handleRemoveItemClick(itemId){    
    // get index of item
    const index = cart.indexOf(itemId)
    
    // remove item from cart
    cart.splice(index, 1)
        
    renderOrder()
}

function handleCompleteOrderClick(){
    modalEl.style.display = 'inline'
    renderModal()
    
    document.getElementById('payment-form').addEventListener(
        'submit', handlePaySubmit)
}

function handlePaySubmit(e) {
    e.preventDefault()

    const form = e.target
    if (form.checkValidity()) {
        closeModal()
        cart = []
        renderOrder()
        const formData = new FormData(form)
        renderOrderSuccess(formData.get('name'))
    } else {
        alert('Please fill out all required fields.')
    }
}

// Get HTML functions
function getMenuHtml() {
    return menuArray.map((item) => {
        return `
<div class="card">
    <div class="item">
        <p class="item-emoji">${item.emoji}</p>
        <div class="item-desc">
            <p class="title">${item.name}</p>
            <p class="details">${item.ingredients.join(', ')}</p>
            <p class="price">$${item.price}</p>
        </div>
    </div>
    <button class="add-item-btn" id="add-item-btn-${item.id}" data-add="${item.id}">+</button>
</div>
`
    }).join('')
}
    
function getOrderHtml(){
    // get items from cart
    const cartItems = cart.map((id) => {
        return menuArray.find((item) => item.id === id)
    })
    
    // determine total price
    const total = cartItems.reduce((tot, item) => tot += item.price, 0)
    console.log(total)
    
    // count each item
    const itemCounts = cart.reduce((counts, itemId) => {
        counts[itemId] = (counts[itemId] || 0) + 1
        return counts
    }, {})
    
    let addedItemsHtml = ''
    
    for (const itemId in itemCounts) {
        const count = itemCounts[itemId]
        const item = menuArray.find((elm) => elm.id === Number(itemId))
        const countHtml = count > 1 ? `${count} x ` : ''
        addedItemsHtml += `
<div class="line-item">
    <div class="order-item">
        <p class="title">${item.name}</p>
        <button class="remove-btn" data-remove="${item.id}">remove</button>
    </div>
    <p class="price">${countHtml}$${item.price}</p>
</div>
`
    }
    
    // order title and total price
    const orderTitleHtml = `
<h2 class="title subheading">Your order</h2>
`

    const totalPriceHtml = `
<div class="line-item">
    <p class="title">Total price:</p>
    <p class="price">$${total}</p>
</div>
<button class="order-btn" id="order-btn">Complete order</button>
`   
    
    // return the final HTML if the cart is not empty
    return cart.length > 0
        ? orderTitleHtml + addedItemsHtml + totalPriceHtml
        : ''
}

function getModalHtml(){
    return `
<div class="modal-container">
    <h3>Enter card details</h3>
    <form id="payment-form">
        <label for="name"></label>
        <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name" />
        <label for="card-num"></label>
        <input
            required
            type="text"
            id="card-num"
            name="card-num"
            placeholder="Enter card number"
            pattern="[0-9]+" />
        <label for="cvv"></label>
        <input
            required
            type="text"
            id="cvv"
            name="cvv"
            placeholder="Enter CVV"
            pattern="[0-9]+" />
        <button type="submit" class="pay-btn" id="pay-btn">Pay</button>
    </form>
`
}

function closeModal(){
    modalEl.style.display = 'none'
}
    
function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuHtml()
}

function renderOrder(){
    document.getElementById('order').innerHTML = getOrderHtml()
}

function renderModal(){
    document.getElementById('payment-modal').innerHTML = getModalHtml()
}

function renderOrderSuccess(firstName='Friend'){
    const message = `<p class="message">Thanks, ${firstName}! Your order is on its way!</p>`
    successEl.innerHTML = message
}

function clearOrderSuccess(){
    successEl.innerHTML = ''
}

renderMenu()