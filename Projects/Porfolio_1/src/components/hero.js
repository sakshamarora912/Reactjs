import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        className="w-full h-full object-cover brightness-75 transition-transform duration-300 ease-in-out transform hover:scale-110"
        src={IntroImg}
        alt="IntroImg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
        <p className="text-xl md:text-2xl uppercase font-light tracking-wider mb-4 animate-fadeIn">
          HI, I'M <span className='protest-guerrilla-regular'> SAKSHAM ARORA </span>  and <br /> i am 
          <span  className="handjet">
          <Typewriter 
            onInit={(typewriter) => {
              typewriter
                .typeString("FRONT-END DEVELOPER").pauseFor(1000).deleteAll()
                .typeString("JAVASCRIPT DEVELOPER").pauseFor(1000).deleteAll()
                .typeString("REACT JS DEVELOPER").pauseFor(1000).start();
            }}
        />
          </span>
        </p>
        <div className="flex justify-center gap-4 mt-4 animate-fadeIn">
          <Link
            to="/project"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            My Projects
          </Link>
          <Link
            to="/about"
            className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
