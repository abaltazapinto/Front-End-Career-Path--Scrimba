export const colleagues = [
    'Miguel',
    'Pedro',
    'Joana',
    'Vitor',
    'Sofia'
];

export function populateSelectOptions(selectElement, options){
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(/ /g, "");
        option.textContent = optionText;
        selectElement.appendChild(option)
    });
}