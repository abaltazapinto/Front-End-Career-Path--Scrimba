// script.js

//checks of the color that is withi the seed color
console.log(document.getElementById('seed-color'))

document.getElementById('generate-btn').addEventListener('click', async () => {
    console.log('Generate button clicked!')
    const seedColor = document.getElementById('seed-color').value.substring(1); // remove the #
    const schemeMode = document.getElementById('scheme-mode').value;
    const colorSchemeDiv = document.getElementById('color-scheme');


    if (!seedColor || !schemeMode) {
        console.error('Seed color or scheme mode is missing')
        return;
    }
    const apiUrl = `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}&count=5`;
    console.log(`Requesting: ${apiUrl}`); 

    try {

        // fetch color schem from the API 
        const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}&count=5`);
        const data = await response.json();

        console.log('API response:', data);

        colorSchemeDiv.innerHtml = ``;

        // render a new scheme
        data.colors.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.style.backgroundColor = color.hex.value;
            colorBox.textContent = color.hex.value;

            // Copy to clipboard on click
            colorBox.addEventListener('click', () => {
                navigator.clipboard.writeText(color.hex.value).then(() => {
                    showAlert(`Copied ${color.hex.value} to clipboard!`);
                });
            });

            colorSchemeDiv.appendChild(colorBox);
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

