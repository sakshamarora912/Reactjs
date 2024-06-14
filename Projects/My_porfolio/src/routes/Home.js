import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Work from '../components/work';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home