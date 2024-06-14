import "./hero2.css"
import React, { Component } from 'react'
import Typewriter from "typewriter-effect";


class Hero2 extends Component {
    render(){
        return (
            <div className="hero-img">
                <div className="heading">
                <h1>{this.props.heading}</h1>
                <Typewriter onInit={(typewriter) => {
                    typewriter
                        .typeString(this.props.text1) 
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(this.props.text2)
                        .start();
                }}
                />
                </div>
            </div>
          )
    }

}

export default Hero2