import "./AboutContent.css"
import React from 'react'
import react1 from "../assets/react1.jpg"
import{Link} from 'react-router-dom'

const AboutContent = (props) => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>I am a Front-End Developer</p>
            <Link to="/content">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent