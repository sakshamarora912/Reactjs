import React from 'react'
import { Link } from 'react-router-dom';
import './item_shared.css'

const Item = (props) => {
  return (
    <div className="part-1" style={{ background: `url(${props.hero_img})52em/30em no-repeat,linear-gradient(to right,black 2%,transparent 80%),#7b0606 `}}>
        <h2>{props.hero_tag}</h2>
        <p>{props.hero_about}</p>
        <Link to="#target"><button className="btn btn-secondary"style={{width: "7em",margin: "auto"}}>Get Started</button></Link>
    </div>
  )
}

export default Item