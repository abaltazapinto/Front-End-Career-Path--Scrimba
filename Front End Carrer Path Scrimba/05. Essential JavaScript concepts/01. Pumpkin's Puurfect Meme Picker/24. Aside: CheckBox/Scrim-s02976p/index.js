const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')
const acceptMailingList = document.getElementById('accept-mailing-list')


continueBtn.addEventListener('click', function(){
    
/*
Challenge:
1. Add a second checkbox to see if a user
   wants to be added to the mailing list.
2. If they do, log out "mail accepted" when 
   the continue button is clicked. If they
   don't, log out "mail not accapted."
*/
    if (acceptTerms.checked && acceptMailingList.checked){
        console.log("Terms accepted and include mailing list")    
    }
    else if (acceptTerms.checked){
        console.log("Terms accepted but not the !mailing list")         
    }
    else {
        console.log("you have to accept the terms and conditons")
    }

    
})

