import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero2 from '../components/hero2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="CONTACT" text2="Lets Have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact