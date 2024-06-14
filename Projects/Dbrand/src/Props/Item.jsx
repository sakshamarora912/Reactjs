import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className="container">
        <div className="container-heading">
            <h1>{props.heading}</h1>
            <p>{props.tag}</p>
            <button className="btn btn-dark">SHOP NOW</button>
        </div>
        <div className = "container-image" style={{backgroundImage: `url(${props.img})`,minHeight: '100%',}}></div>
    </div> 
  )
}

export default Item