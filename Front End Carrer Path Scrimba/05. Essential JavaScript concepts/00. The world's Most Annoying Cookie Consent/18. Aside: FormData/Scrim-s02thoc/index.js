const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const loginFormData = new FormData(loginForm)
    console.log(loginFormData)

    for (let [key, value] of loginFormData.entries()) {
        console.log(`${key}:${value}`)
    }
})
 