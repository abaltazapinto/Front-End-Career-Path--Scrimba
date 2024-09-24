const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.querySelector('#modal-inner')
console.log(modalInner)

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
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = "Making the sale..."
    }, 1500)


  
/*   
Challenge: 
1. Make it so that 1.5 seconds after seeing the 
   "Making the sale..." message, the modal is 
   cleared of its content and the following 
   string of HTML is displayed instead.
   
   `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    ` 
    done ✅
*/  
            setTimeout(function() {
                modalInner.innerHTML =    
                `<h2>Thanks you sucker! </h2>
                <p>We just sold the rights to your eternal soul.</p>
                <div class="idiot-gif">
                    <img src="images/pirate.gif">
                </div>
                ` 
            }, 3000)
}) 

 