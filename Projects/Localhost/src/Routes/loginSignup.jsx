import React ,{ useState } from 'react'
import './CSS/loginsignup.css'

const LoginSigup = () => {
  const [state,setState]=useState("Login");
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==='Sign Up'
            ?<input name='username'type="text" placeholder='Your Name'/>
            :<></>
            }
          <input name='email' type="email" placeholder='Email Address' />
          <input name='password' type="password" placeholder='Password' />
        </div>
        <button onClick={()=>state==="Login"?login():signup()}>Continue</button>
        {state==="Sign Up"
          ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
          :<p className="loginsignup-login">Create an account? <span onClick={()=>setState("Sign Up")}>Click here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSigup