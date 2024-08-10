// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


function error() {
    const message = document.getElementById('error');
    console.log(message);
    const messageError = "Something went wrong, please try again"

    message.textContent = messageError;

}
