const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

