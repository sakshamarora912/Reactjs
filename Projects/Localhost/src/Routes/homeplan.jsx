import React from 'react'
import Item_6 from '../Components/Item/item_6';
import '../Components/Item/item_shared.css';
import plan from '../assets/plan';

const homeplan = () => {
  return (
    <div className='home-plan' style={{padding: "1em"}}>
        <h1 className='specs_title'>Our Hosting Plan</h1>
            <div style={{display: "flex",margin: "0 10em"}}>
                {plan.map((item,i)=>{                    
                    if(item.plan==="common"){
                        return( 
                            <Item_6
                                key={i} about={item.about} price={item.price} type={item.type}
                                data={item.data.map((data, index) => (
                                    <li key={index}>{data}</li>
                                ))}
                            />
                        )   
                    }
                })}
                
            </div>  
           
        </div>
  )
}

export default homeplan