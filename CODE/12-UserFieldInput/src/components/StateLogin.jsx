import { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({email: '',password: '',});
  const [didEdit,setDidEdit]=useState({email:false,password:false});
  
  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({...prevValues,[identifier]: value}));
    setDidEdit((prevEdit) => ({...prevEdit,[identifier]:false}));
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({...prevEdit,[identifier]:true}));
  }
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input 
          label="Email" id="email"type="email"name="email"value={enteredValues.email}
          onBlur={()=>handleInputBlur('email')} onChange={(event) => handleInputChange('email', event.target.value)}
          error={emailIsInvalid && 'please enter a valid email'}
        />
        <Input 
          label="Password" id="password"type="password"name="password"value={enteredValues.password}
          onBlur={()=>handleInputBlur('password')} onChange={(event) => handleInputChange('password', event.target.value)}
          error={passwordIsInvalid && 'please enter a valid email'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
