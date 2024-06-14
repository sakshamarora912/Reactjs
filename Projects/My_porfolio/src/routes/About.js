import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero2 from '../components/hero2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="About" text1="Hi I am Saksham Arora" text2="I am a Friendly Front-End Developer"/>
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About