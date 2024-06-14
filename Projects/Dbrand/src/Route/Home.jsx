import React from 'react'
import homeData from '../assets/homeData';
import Item from '../Props/Item';

const Home = () => {
  return (
    <div className="home">
      {homeData.map((item,i)=>{
        return <Item key={i} heading={item.heading} tag={item.tag} img={item.img}  />
      })}
    </div>
  )
}

export default Home