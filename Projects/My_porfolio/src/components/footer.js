import "./footer.css"
import React from 'react'
import { Link } from "react-router-dom"
import { FaHome,FaAddressBook,FaEnvelope, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa"
import MePhoto from "../assets/ME_PHOTO.png"
import MePhoto2 from "../assets/ME_PHOTO2.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Krishna Nagar, Delhi.</p>
                        <p>INDIA</p>
                    </div>
                </div>
                <div className="contact">
                    <FaAddressBook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>9953963660</p>
                    </div>
                </div>
                <div className="mail">
                    <FaEnvelope size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Sakshamarora9120@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="card_img">
                    <div className="box">
                        <div className="front">
                            <img className="MePhoto2" src={MePhoto2}></img>
                        </div>
                        <div className="back">
                            <img className="MePhoto" src={MePhoto}></img>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>About Me</h1>
                    <p>I am a Front-End developer</p>
                    <div className="social">
                        <Link to="https://www.instagram.com/saksham__arora__/"><FaInstagram size={30} style={{color:"#fff",margin:"1rem"}}></FaInstagram></Link>
                        <Link to=""><FaTelegram size={30} style={{color:"#fff",margin:"1em"}}></FaTelegram></Link>
                        <Link to="https://www.linkedin.com/in/saksham-arora-2a419b22a"><FaLinkedin size={30} style={{color:"#fff",margin:"1em"}}></FaLinkedin></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer