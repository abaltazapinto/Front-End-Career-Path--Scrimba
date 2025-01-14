// script.js

//checks of the color that is withi the seed color
console.log(document.getElementById('seed-color'))

document.getElementById('generate-btn').addEventListener('click', async () => {

    const seedColor = document.getElementById('seed-color').value.substring(1); // remove the #
    const schemeMode = document.getElementById('scheme-mode').value;
    const colorSchemeDiv = document.getElementById('color-scheme');
    // colorSchemeDiv = ``;


    if (!seedColor || !schemeMode) {
        console.error('Seed color or scheme mode is missing')
        return;
    }

    const apiUrl = `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}&count=5`;
    console.log(`Requesting: ${apiUrl}`); 

    try {
        const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}&count=5`);
        const data = await response.json();
        colorSchemeDiv.innerHTML = ``;
        
        data.colors.forEach(color => {
            colorSchemeDiv.innerHtml = ``;

            const colorContainer = document.createElement('div');
            colorContainer.classList.add('color-container');

            const colorBox = document.createElement('div');
            colorBox.innerHTML = ``;
            colorBox.classList.add("color-box");
            colorBox.style.backgroundColor = color.hex.value;

            colorBox.addEventListener('click', () => {
                alert(`Copied ${color.hex.value} to clipboard!`);
                navigator.clipboard.writeText(color.hex.value).then(() => {
                    showAlert(`Copied ${color.hex.value} to clipboard!`);
                });
            });

            const colorText = document.createElement('p');
            colorText.classList.add('color-text');
            colorText.textContent = color.hex.value;

            colorContainer.appendChild(colorBox);
            colorContainer.appendChild(colorText);
            colorSchemeDiv.appendChild(colorContainer);
        });
    } catch (error) {
        console.error('Error fetching color scheme: ', error);
    }
});

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert');
    alertBox.textContent = message;

    document.body.appendChild(alertBox);
    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.remove();
    }, 2000);
}

