//const { response } = require("express")
//const { default: ReactFacebookLogin } = require("react-facebook-login")

document.getElementById('loginbtn').addEventListener('click',loginWithFacebook, false)

function loginWithFacebook(){
    FB.login( response => {
        const { authResponse:{accessToken, userID} } = response
        
        fetch('/login-with-facebook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ accessToken, userID})
        }).then(res => {
            console.log(res)
        })
    
}, {scope: 'pulic_profile,email'})
return false
}