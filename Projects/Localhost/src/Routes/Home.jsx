import React from 'react'
import './CSS/home.css'
import Hero from '../Components/Hero/hero';
import Plan from '../Components/Plan/plan';
import banner_1 from '../assets/images/product-overview-background.png'
import banner_2 from '../assets/images/introduction-background.jpg' 
import HomePlan from '../Routes/homeplan'


const Home = () => {
  return (
    <div>
      <Hero product_img={banner_1} intro_img={banner_2}/>
      <HomePlan />
    </div>
  )
}

export default Home