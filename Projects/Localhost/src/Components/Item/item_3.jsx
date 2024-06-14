import React from 'react'
import './item_shared.css'

const Item_3 = (props) => {
  const defaultStyle = {
    // height: "27em"
 };
 if (props.plan === "shared" && props.type === "BASIC") {
  defaultStyle.height = "31.5em";
  defaultStyle.marginTop = "1.5em";
}
if (props.plan === "shared" && props.type==="BUSINESS" ) {
  defaultStyle.height = "36em";
}

   if (props.plan === "shared" && props.type==="PRO" ) {
    defaultStyle.height = "37.5em";
 }

 if (props.plan === "cloud" && (props.type === "PERSONAL" || props.type === "PRO")) {
  defaultStyle.height = "32em";
  defaultStyle.marginTop = "1.5em";
}
   if (props.plan === "cloud" && props.type==="BUSINESS" ) {
    defaultStyle.height = "34.5em";
 }
 if(props.plan==="vps"){
  defaultStyle.height = "31.5em";
 }

 if (props.plan === "Reseller" && (props.type === "BASIC" || props.type === "PRO")) {
  defaultStyle.height = "28em";
  defaultStyle.marginTop = "1em";
}
   if (props.plan === "Reseller" && props.type==="BUSINESS" ) {
    defaultStyle.height = "29em";
 }


  return (
    <div className='plan-child'style={defaultStyle}>
      <div>
        <h1 className='plan_type'>{props.type}</h1> 
        <h2 className='plan_tag'>{props.tag}</h2>
        <h2 className='plan_price'>{props.price}</h2>
        <h2 className='plan_features'>{props.features}</h2>
        <button className='plan_button'>Select</button> 
      </div>
    </div>
  )
}

export default Item_3;