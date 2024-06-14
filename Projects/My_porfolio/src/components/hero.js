import "./hero.css"
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg"
import {Link } from "react-router-dom"

const hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} aly="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A FRONT-END DEVELOPER</p>
            <h1>React Developer</h1>
            <Link to="/project"className="btn">Projects</Link>
            <Link to="/content"className="btn btn-light">Content</Link>
        </div>
    </div>
  )
}

export default hero