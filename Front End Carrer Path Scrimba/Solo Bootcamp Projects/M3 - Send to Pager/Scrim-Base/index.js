// javascript

/* criar funcao para funcionarem todos os botoes */


const buttons = document.querySelectorAll(".buttons");

const phoneDisplay = document.querySelector(".phone-display p")

function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    phoneDisplay.textContent += buttonValue
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)
});

const resetBtn = document.getElementById('resetNumbers')

resetBtn.addEventListener("click", function() {
    phoneDisplay.textContent = "";
})

const sendBtn = document.getElementById('send')
const pagerDisplay = document.querySelector(".pager-display p")

function handleSendButton() {
    const numbersToSend = phoneDisplay.textContent
    pagerDisplay.textContent = numbersToSend
}


sendBtn.addEventListener("click", function() {
    handleSendButton()
})
