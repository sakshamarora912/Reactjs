import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/ME_PHOTO.png'


const Navbar = () => {
  return (
    <div className="navbar">
        <img src={navlogo} alt="" className='nav-logo'/>
        <img src={navProfile} height="80" alt="" style={{borderRadius:"6em"}}/>
    </div>
  )
}

export default Navbar