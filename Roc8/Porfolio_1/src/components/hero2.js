import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Hero2 extends Component {
    render() {
        return (
            <div className="relative w-full h-[45vh] bg-black bg-opacity-50 overflow-hidden flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center z-[-1] transition-transform duration-300 ease-in-out transform hover:scale-110"
                    style={{ backgroundImage: `url("../assets/hero2img.jpg")` }}></div>
                <div className=" mt-16 relative z-10 text-center text-white px-4 md:px-8 lg:px-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{this.props.heading}</h1>
                    <div className="text-xl md:text-2xl lg:text-3xl">
                        <Typewriter
                            onInit={(typewriter) => {
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
            </div>
        );
    }
}

export default Hero2;
