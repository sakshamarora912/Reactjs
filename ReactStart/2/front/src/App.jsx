import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import OtpVerification from './Pages/OtpVerification'
import { Provider } from './Store/Context';
import ProtectedPage from './Pages/ProtectedPage'
import './index.css'

const App = () => {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/OtpVerification" element={<OtpVerification />} />
          <Route path="/protectedPage" element={<ProtectedPage />} />
        </Routes>
      </Router>
    </Provider>
    // <>
    //   <Pagination/>
    // </>
  );
};

export default App;
