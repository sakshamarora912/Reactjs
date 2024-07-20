import React, { useState,useRef, useEffect  } from 'react';
import axios from 'axios';
import { useData } from '../Store/Context';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const navigate = useNavigate()
  const [otp, setOTP] = useState(['', '', '', '','', '', '', '',]);
  const {username,email,password,setEmail} = useData()
  const inputRefs = useRef([]);

  useEffect(()=>{
    if(!email)
      navigate('/')
  },[])

  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value.length === 1 && index < otp.length - 1) 
        inputRefs.current[index + 1].focus();
  };

  const handleBackspace = (index, e) => {
    if (e.key === 'Backspace' && index > 0)
      inputRefs.current[index - 1].focus();
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    try {
      const response = await axios.post('http://localhost:5000/verifyOtp', { 
        'auth-token':`${localStorage.getItem('auth-token')}`,
        username, email,password , otp: otpString 
      })
    
      console.log(response.data);
      if (response.status === 200){
        const { token } = response.data
        localStorage.setItem('auth-token',token);
        alert('Signup successful!');
        navigate('/protectedPage');
      }
      else
        alert('Unexpected response status. Please try again.');
      
    } catch (error) {
      if (error.response && error.response.status === 400)
        alert('Invalid OTP');
      else
        console.error('Error in verify OTP:', error);
        alert('Error verifying OTP. Please try again.');
    }
  };

  return (
    <div className="w-[32em] my-0 mx-auto"  style={{ transform: 'scale(0.9)' }}>  
      <div className="w-80vh h-80px text-black rounded-lg p-12  border border-gray-300">
        <div className='text-center'>
          <h1 className='text-3xl my-5'>Verify your email</h1>
          <h2 className='text-base mb-0'>Enter the 8 digit code you received on {email}</h2>
        </div> 
        <div style={{marginTop:"2em"}}>
          {otp.map((digit, index) => (
            <input
              key={index} value={digit} type="text" maxLength="1"  required
              className=' h-12 w-10 gap-6 bg-white text-black p-2 text-xl border border-grey m-1 rounded-md' 
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleBackspace(index, e)} 
              ref={el => inputRefs.current[index] = el}
            />
          ))}
          <button 
            type="submit" 
            onClick={handleOtpVerification} 
            className=' className="text-base w-[28em] h-12 text-white bg-black mt-4 border-none font-medium cursor-pointer rounded-md"'
          >
            Verify OTP & Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default OtpVerification;
