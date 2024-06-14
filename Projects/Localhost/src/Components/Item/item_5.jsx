import React,{useRef} from 'react';

const item_5 = (props) => {
    const showOrhide = useRef(null);
    const color_01=useRef(null);
    const color_02=useRef(null);

 const toggleClass = () => {
    showOrhide.current.classList.toggle('visibility');
    color_01.current.classList.toggle('color_01');
    color_02.current.classList.toggle('color_02');
    
 };


  return (
    <div>
         <div style={{borderBottom: "1px solid white",padding:"1em 0"}}>
            <div style={{display:"flex",justifyContent: "space-between"}}>
                <h1 className='category_about'ref={color_01}>{props.about}</h1>
                <button className="a" onClick={toggleClass} ><div ref={color_02} className="b" >+</div></button>
            </div>
            <h1 className='category_data visibility' ref={showOrhide} >{props.data}</h1>
        </div>
    </div>
  )
}

export default item_5