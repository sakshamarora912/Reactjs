  import React from 'react';
  import { Link ,useNavigate} from 'react-router-dom';
  import axios from 'axios';
  import { useData } from '../Store/Context';

  const Login = () => {
    const navigate = useNavigate();
    const {email, setEmail, password, setPassword } = useData();
    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        if (response.status === 200) {
          alert('Login successful!');
          navigate('/protectedPage')
          localStorage.setItem('auth-token',stringify(response.data));
        }
        else 
          alert('Login failed. Please check your credentials.');
      } catch (error) {
        if (error.response && error.response.status === 401)
          alert('Invalid credentials');
      }
    };

    return (
      <div className="w-[32em] my-0 mx-auto"  style={{ transform: 'scale(0.9)' }}>
        <div className="text-black rounded-lg p-12 border border-gray-300">
          <div className='text-center'>
              <h1 className='text-3xl my-5'>Login</h1>
              <h2 className='text-base mb-0'>Welcome Back To Ecommerce</h2>
              <p className='text-xs text-center'>The next gen Business marketPlace</p>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="flex flex-col gap-4 mt-30">
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
              <p className="mt-5 text-gray-600 text-lg font-medium">Create an account?<Link to="/signup">Sign Up</Link></p>
          </form>
        </div>
      </div>
    )
  }

  export default Login;
