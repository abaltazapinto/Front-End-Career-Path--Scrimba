const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    
    const name = loginFormData.get('astronautName')
    console.log(name) 
    /*
     for ( [key, value] of loginFormData.entries()) {
        console.log(`${key} : ${value}`)
    }
    */

    const email = loginFormData.get('astronautEmail')
    console.log(email)

    const password = loginFormData.get('astronautPassword')
    console.log(password)
/* 
Challenge: 
1. Log out the email and password from loginFormData.
*/


})
