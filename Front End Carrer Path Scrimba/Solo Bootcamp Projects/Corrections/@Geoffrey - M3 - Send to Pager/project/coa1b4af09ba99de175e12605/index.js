/* criar funcao para funcionarem todos os botoes */
const buttons = document.querySelectorAll(".buttons");
const phoneDisplay = document.querySelector(".phone-display")
const sendBtn = document.getElementById('send')
const pagerDisplay = document.querySelector(".pager-display p")
const resetBtn = document.getElementById('resetNumbers')

// Handling keypad behavior
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    phoneDisplay.textContent += buttonValue
}

function handleSendButton() {
    const numbersToSend = phoneDisplay.textContent
    pagerDisplay.textContent = numbersToSend
}

sendBtn.addEventListener("click", function() {
    handleSendButton()
})

// Creating keypad event listeners
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)
});


resetBtn.addEventListener("click", function() {
    phoneDisplay.textContent = "";
})