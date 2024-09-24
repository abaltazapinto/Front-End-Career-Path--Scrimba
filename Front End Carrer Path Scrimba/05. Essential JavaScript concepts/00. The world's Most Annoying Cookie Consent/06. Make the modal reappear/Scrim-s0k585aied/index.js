/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

const modal = document.querySelector('#modal')
console.log(modal)

setTimeout(function(){
    modal.style.display = 'block'
    console.log('Modal Opened!')
}, 1500)