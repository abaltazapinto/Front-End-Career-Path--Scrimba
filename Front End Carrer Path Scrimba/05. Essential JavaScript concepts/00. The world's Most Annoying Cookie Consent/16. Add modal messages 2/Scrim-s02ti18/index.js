const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>
    `
    const modalInnerLoading = document.querySelector('#upload-text');
    console.log(modalInnerLoading)
    setTimeout(function() {
        modalInnerLoading.textContent = "Making the sale..."
    , 1500})

    
})



/*   
Challenge: 
✅
1. Use a setTimeout to make the phrase "Uploading
   your data to the dark web" change to "Making the 
   sale..." after 1.5 seconds.
   ✅
⚠️ Do not change the loading svg!
*/   


