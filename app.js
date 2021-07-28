import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
    console.log(response);
}


 <div> 
     <h1>Login with FACEBOOK</h1>
     <FacebookLogin
    appId="1122534518214144"
    autoLoad={true}
    callback={responseFacebook} />,
 </div>
