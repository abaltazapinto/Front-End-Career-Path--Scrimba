const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const acceptBtn  = document.getElementById('accept-btn')

console.log(acceptBtn)

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
}) 

/*   
Challenge: 
1. Take control of the decline btn. (What do you
   need to do to make that possible?)
2. Set up an eventListener that is triggered 
   when a user's cursor hovers over the decline 
   button. (Google the event to listen out for!)
3. For now, just log out "hovered" when that 
   happens. 
*/ 

declineBtn.addEventListener('mouseover', function(){
    console.log('Hovered')

    //get the currnet position of both buttons
    const declineRect = declineBtn.getBoundingClientRect();
    const acceptRect = acceptBtn.getBoundingClientRect();

    console.log(acceptBtn, declineBtn)

    //Swap their positions using absolute positioning
    declineBtn.style.position = 'absolute';
    acceptBtn.style.position = 'absolute' ;

    declineBtn.style.top = `${acceptRect.top}px`;
    declineBtn.style.left = `${acceptBtn.left}px`;

    acceptBtn.style.top = `${declineRect.top}px`;
    acceptBtn.style.left = `${declineRect.left}px`;

    console.log('Buttons swaped try at least')
})


consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 
