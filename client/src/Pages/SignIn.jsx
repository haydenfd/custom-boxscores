import React, {useEffect, useState} from 'react'
import './SignIn.css'
import jwt_decode from 'jwt-decode'

const SignIn = () => {

  const [user, setUser] = useState({})

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT token: " + response.credential);
    console.log(jwt_decode(response.credential))
    setUser(jwt_decode(response.credential))
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      id: "24437569456-29o4ejhmer5ebfmg3faded33g61kdp58.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        'longtitle': true,
        'theme': 'dark',
      }
    )
  },[])

  return (
    <div className='sign-in-box-container'>
        <h1 className='sign-in-box-title'>
            Sign in with Google Account
        </h1>
        <p className='sign-in-box-p'>
          To save your box score preferences, you need to sign into a Google account. If you've never signed up with your Google Account before, don't worry.
        </p>
        {/* <div id="signInDiv">
        </div> */}
        {user.length > 0? <p>Welcome Back, User</p>: <div id='signInDiv'></div>}
     </div>
  )
}

export default SignIn