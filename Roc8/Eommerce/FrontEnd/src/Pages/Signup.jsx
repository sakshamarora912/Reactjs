// Fix typo and import axios
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useData } from '../Store/Context';

const Signup = () => {
  const navigate = useNavigate()
  const {email,setEmail,username, setUsername,password, setPassword} = useData()

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, password, email});
      if (response.status === 200){
        alert('Otp send to your mail id!.');
        navigate('/OtpVerification')
      }else
        alert('Signup Failed')

    } catch (error) {
      if (error.response && error.response.status === 409){
        alert('Username or email already exists.');
      }
      else if (error.response && error.response.status === 500)
        alert('Error checking user existence. Error saving user.')
      
    }
  };

  return (
    <div className="w-[32em] my-0 mx-auto"  style={{ transform: 'scale(0.9)' }}>
      <div className="w-80vh h-490px text-black rounded-lg p-12 border border-gray-300">
        <div className='text-center'>
            <h1 className='text-3xl my-5'>Create Your Account</h1>
        </div>
        <form onSubmit={handleSignUpSubmit}>
          <div className="flex flex-col gap-4 mt-30">
            <label htmlFor="username" className='text-left text-black text-sm'>Username</label>
            <input 
              className="text-sm bg-white h-9 w-94 p-2 pl-5 border border-gray-300 outline-none text-black rounded-md mb-4"
              name='username' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              type="text" 
              placeholder='Your Name' />
            <label htmlFor="email" className='text-left text-black text-sm'>Email</label>
            <input 
              className="text-sm bg-white h-9 w-94 p-2 pl-5 border border-gray-300 outline-none text-black rounded-md mb-4"
              type="email" 
              placeholder="email"
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
               required />
            <label htmlFor="password" className='text-left text-black text-sm'>Password</label>
            <input 
              className="text-sm bg-white h-9 w-94 p-2 pl-5 border border-gray-300 outline-none text-black rounded-md mb-4"
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required />
          </div>
          <button type="submit" className=' className="text-base w-[28em] h-12 text-white bg-black mt-4 border-none font-medium cursor-pointer rounded-md"'>Continue</button>
            <p className="mt-5 text-gray-600 text-lg font-medium">Already have an account? <Link to="/">Login</Link>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Signup;
