const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const quantityDisplay = document.getElementById('quantity-display')
const cartBtn = document.getElementById('cartBtn')

let quantity = 0

decrement.addEventListener('click', function(){
    quantity--
    if (quantity === 0){
        decrement.disabled = true
        cartBtn.disabled = true
    }      
    quantityDisplay.innerText = quantity
})

increment.addEventListener('click', function(){
    quantity ++
    decrement.disabled = false
    cartBtn.disabled = false
    quantityDisplay.innerText = quantity
})
 
cartBtn.addEventListener('click', function(){

    console.log(`You order for ${quantity} pairs of shoes is being processed`)
/*
Challenge:
1. Disable the 'Add to Cart' button when 
   quantity is at zero. Remember: quantity
   will be at zero when the page loads!
*/ 
})


