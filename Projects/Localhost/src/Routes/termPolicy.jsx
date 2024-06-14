import React,{useRef} from 'react'
import all from '../assets/privacyTerm';
import Item_5 from '../Components/Item/item_5'
import '../Components/Item/item_shared.css'

const TermPolicy = ({category}) => {

  return (
    <div style={{background:"black",color:"white"}}>
        <h1 className='category_heading'>{category === 'terms' ? 'Terms of Service' : 'Privacy Policy'}</h1>
        <div style={{paddingBottom:"1.5em"}}>
          <button className="btn btn-success">Open All</button>
          <button className="btn btn-danger">Close All</button>
        </div> 
        <div style={{padding:"0 1em"}}>
            {all.map((item,i)=>{
                console.log(category); 
                if(category===item.type){
                    return <Item_5 key={i} about={item.about} data={item.data}/>      
                }       
            })}
        </div>        
    </div>
  )
}

export default TermPolicy;