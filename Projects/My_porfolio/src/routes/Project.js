import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero2 from '../components/hero2';
import PricingCards from '../components/PricingCards';
import Work from '../components/work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="PROJECTS" text2="Some of my most recent works"/>
      <Work/>
      <PricingCards />
      <Footer/>
  </div>  
  )
}

export default Project