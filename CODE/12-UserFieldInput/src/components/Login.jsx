import { useRef, useState } from "react";

export default function Login() {
  const email=useRef();
  const password=useRef()
  const[emailIsInvalid,setEmailIsInvalid]=useState(false)

 function handleSubmit(event){
  event.preventDefault();
  const entereredEmail=email.current.value;
  const enteredPassword=password.current.value;
  const emailIsValid=entereredEmail.includes('@');
  console.log(entereredEmail.includes('@'));
  if(!emailIsValid){
    setEmailIsInvalid(true);
    return
  }
  setEmailIsInvalid(false);
 }
  return (
    <form>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter a vaild email address</p>}</div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
