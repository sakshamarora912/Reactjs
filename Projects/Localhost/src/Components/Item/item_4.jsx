import React from 'react'
import './item_shared.css'

const Item_4 = (props) => {
  return (
    <div className='specs_child'>
      <h1 className='specs_about'>{props.about}</h1> 
      <h2 className='specs_features'>{props.features}</h2>
    </div>
  )
}

export default Item_4;