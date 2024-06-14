import React from 'react'
import Banner from '../assets/banner_data'
import Reason from '../assets/reason_data'
import Plan from '../assets/plan'
import Specs from '../assets/specs'
import Item from '../Components/Item/item_1'
import Item_2 from '../Components/Item/item_2'
import Item_3 from '../Components/Item/item_3'
import Item_4 from '../Components/Item/item_4'
import '../Components/Item/item_shared.css'
import img from '../assets/images/part-3-image.png'
//import RotatingElement from '../assets/rotatingElement.jsx';

const Hostcategory = ({plan}) => {
// const elRef = RotatingElement();
  return (
    <div>
        <div>
            {Banner.map((item,i)=>{
                if(plan===item.plan.toLocaleLowerCase()){
                    return <Item key={i} hero_tag={item.hero_tag} hero_img={item.hero_img} hero_about={item.hero_about}  />            
                }
            })}
        </div>

        <div className='part-2'>
            <h1 className='section-title'>Our {plan} hosting Plans</h1>
                    <div className='plan'>
                        {Plan.map((item,i)=>{                         
                            if(plan===item.plan.toLocaleLowerCase()){
                                return( 
                                    <Item_3 
                                        key={i}  type={item.type} tag={item.tag} price={item.price} plan={item.plan}
                                        features= {item.features.map((feature,index)=>(                        
                                            <div style={{fontWeight:"400",fontSize: ".5em",padding: "0.4em 0",borderBottom: "1px solid black"}}  key={index}>{feature}</div>     
                                        ))}
                                    />
                                    )
                                }
                            })}    
                </div>     
        </div>

        <div className='reason'>
            <h1>Why choose {plan} Hosting?</h1>
            <div className="part-3"  style={{ background: `url(${img}) black`}}>
            
                <div className="parent">
                    {Reason.map((item,i)=>{
                        if(plan===item.plan.toLocaleLowerCase()){
                            return <Item_2 key={i}  tag={item.tag} about={item.about}  />            
                        }
                })}
               
                </div>
            </div>    
        </div>
       
        <div className='part-4'>
            <h1 className='specs_title'>{plan} hosting Technical Specifications</h1>
                    <div style={{display: "flex",margin: "0 17em"}}>
                        {Specs.map((item,i)=>{                         
                            if(plan===item.plan.toLocaleLowerCase()){
                            return( 
                                <Item_4
                                    key={i}
                                    about={item.about}
                                    features={item.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                />
                                )
                               
                            }
                        })}
                </div>  
        </div>
       
    </div>
  )
}

export default Hostcategory