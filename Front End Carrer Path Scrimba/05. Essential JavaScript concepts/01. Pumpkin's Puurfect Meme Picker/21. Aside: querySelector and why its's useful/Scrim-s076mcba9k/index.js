// We can much more easily target pseudo elements like :checked
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function(){
 let radioButtons= document.querySelector('input[type="radio"]:checked')
 
 console.log(radioButtons)
})

/*
Challenge:
1. Muscle memory exercise: log out 
   the value of the checked radio 
   option.
*/