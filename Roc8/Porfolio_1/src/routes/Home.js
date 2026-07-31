import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Work from '../components/work';
import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Footer/>
    </div>
  )
}

export default Home