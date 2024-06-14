import React from 'react'

const item_6 = (props) => {
    const defaultStyle = {
        height: "27em"
     };
     if (props.type === "SHARED HOSTING") {
        defaultStyle.height = "25em";
        defaultStyle.marginTop="1.5em";
     }
       if (props.type === "DEDICATED SERVER") {
        defaultStyle.height = "26em"
        defaultStyle.marginTop="1em";
     }
  return (
        <div className='home_plan_child' style={defaultStyle}>
          <h1 className='home_plan_type'>{props.type}</h1> 
          <h1 className='home_plan_about'>{props.about}</h1> 
          <h2 className='home_plan_data'>{props.data}</h2>
          <h2 className='home_plan_price'>Starting from {props.price} monthly</h2>
          <button className='btn btn-secondary' style={{width: "7em"}}>Show plans</button>
        </div>
  )
}

export default item_6