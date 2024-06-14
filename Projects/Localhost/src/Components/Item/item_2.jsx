import React from 'react'
import './item_shared.css'

const Item_2 = (props) => {
  return (
    <div className="child">
        {/* <img src={props.img} alt=""/> */}
        <h1>{props.tag}</h1> <hr/>
        <h2>{props.about}</h2>
    </div>
  )
}

export default Item_2