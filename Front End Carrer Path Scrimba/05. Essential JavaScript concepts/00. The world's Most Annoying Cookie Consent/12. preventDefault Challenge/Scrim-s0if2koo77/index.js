const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const acceptBtn = document.querySelector('.modal-btn')
console.log(acceptBtn)

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

const closeModal = function() {
modal.style.display = 'none'
}

modalCloseBtn.addEventListener('click', closeModal)


acceptBtn.addEventListener('click', function(e) {
    e.preventDefault()
    setTimeout(closeModal, 3000)
})

/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/  

