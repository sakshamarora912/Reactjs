import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
    const [otp, setOTP] = useState(['', '', '', '']); 
    const [otpSent, setOtpSent] = useState(false);

    const handleInputChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
      };

    const handleSendOTP = async () => {
        try {
            const response = await axios.post('http://localhost:5000/sendOTP', { email: email });
            setOtpSent(true);
            if(response.status === 200)
                alert('OTP sent to your email.');
            else
                alert('Error sending OTP.')
        } catch (error) {
            if (error.response && error.response.status === 409) 
                alert('Error sending OTP.');
        }
    }


    const handleOtpVerification = async (e) => {
        e.preventDefault();
        const otpString = otp.join('');
        try {
            const response = await axios.post('http://localhost:5000/verifyOtp', { email, otp: otpString });
            console.log(response.data);
            if (response.status === 200) 
                alert('Signup successful!');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', { username, password, email});
            if(response.status === 200)
                alert('Signup successful!. User saved successfully.');
            else
                alert('Signup Failed')

        } catch (error) {
            if (error.response && error.response.status === 409) 
                alert('Username or email already exists.');
            else if(error.response && error.response.status === 500)
                alert('Error checking user existence. Error saving user.')
            else 
                console.error('Error in verify OTP:', error);
                alert('Error verifying OTP. Please try again.');
        }
    };


    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                {!otpSent ? (
                    <button type="button" onClick={handleSendOTP}>Send OTP</button>
                ) : (
                    <div>
                         {otp.map((digit, index) => (
                            <input key={index} type="text" maxLength="1" value={digit} onChange={(e) => handleInputChange(index, e.target.value)} required/>
                        ))}
                        <button type="submit" onClick ={handleOtpVerification}>Verify OTP & Signup</button>
                    </div>
                )}
                <button>SignUp</button>
            </form>
        </div>
    );
};

export default Signup;
