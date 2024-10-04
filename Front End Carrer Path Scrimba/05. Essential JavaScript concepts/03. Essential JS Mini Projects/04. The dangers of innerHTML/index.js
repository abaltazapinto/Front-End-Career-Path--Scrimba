const filmInput = document.getElementById('film-input')
const addBtn = document.getElementById('add-btn')
const filmList = document.getElementById('film-list')

addBtn.addEventListener('click', function() {
/*
Challenge:
1. Find a way of adding an inputted film to the list 
   which does not allow malicious JavaScript to be executed.
2. Implement it. 
*/

const filmItem = document.createElement('<div>')
filmItem.classList.add('film-item')
filmItem.textContent = filmInput.value
filmList.append((filmItem))
filmInput.value = ''

})