import React from 'react'
import HomeCategoryData from '../assets/HomecategoryData'
import Item_2 from '../Props/Item_2'
import '../Props/Item.css'

const HomeCategory = ({category,handleMouseLeave}) => {
    return (
  <>
    <p className="line_1"></p>
    <p className="type">{category.toUpperCase()}</p>
    <p className="line_2"></p>
    <div className="HomeCategory" onMouseLeave={handleMouseLeave}>
        {HomeCategoryData.map((item,i)=>{
            if(item.category.toLowerCase()===category.toLowerCase()){
                return <Item_2
                            key={i} category={category} type={item.type} 
                            model={item.model.map((model,i)=>(
                                <div key={i}>{model}</div>
                            ))}
                        /> 
            }else{
                return null;
            }
        })}
    </div>
  </>
  )
}

export default HomeCategory