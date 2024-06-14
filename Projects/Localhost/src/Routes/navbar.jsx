import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/navbar.css'

const navbar = () => {
  const [plan,setPlan]=useState("home");
  return (
   <div className="navbar" style={{flexWrap:"nowrap"}}>
    <div onClick={()=>{setPlan("home")}}>
      <Link to="/"className="nav-logo">LOCAL<span style={{color: "#8c0707"}}>HOST</span></Link> 
    </div>
    <div style= {{justifyContent: "flex-End", width:"100%"}} >
      <div className= "dropdown">
        <button className="tag dropbtn">Services</button>
        <div className="dropdown-content">
          <li onClick={()=>{setPlan("shared")}}><Link style={{textDecoration:'none'}} to="/shared">Shared Hosting </Link></li>
          <li onClick={()=>{setPlan("cloud")}}><Link style={{textDecoration:'none'}} to="/cloud">Cloud Hosting</Link></li>
          <li onClick={()=>{setPlan("VPS")}}><Link style={{textDecoration:'none'}} to="/VPS">VPS Hosting</Link></li>
          <li onClick={()=>{setPlan("dedicated")}}><Link style={{textDecoration:'none'}} to="/dedicated">Dedicated Hosting </Link></li>
          <li onClick={()=>{setPlan("reseller")}}><Link style={{textDecoration:'none'}} to="/reseller">Reseller hosting</Link></li>
        </div>
      </div>
    <Link to="/"><button className="tag">About Us</button></Link>
    <button className="login">
      <Link to="/login">Log-In</Link>
    </button>
    </div>
   </div>
  )
}

export default navbar