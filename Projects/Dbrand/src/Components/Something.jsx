import React, { useState } from 'react'
import sb1 from '../assets/something_black_1.jpg'
import s1 from '../assets/something_1_shadow.jpg'
import sb2 from '../assets/something_black_2.jpg'
import sb3 from '../assets/something_black_3.jpg'
import sb4 from '../assets/something_black_4.jpg'
import sw1 from '../assets/something_white_1.jpg'
import sw2 from '../assets/something_white_2.jpg'
import sw3 from '../assets/something_white_3.jpg'
import sw4 from '../assets/something_white_4.jpg'

import './Something.css'
const Something = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [brand,setBrand]=useState()
    const [isClicked,setIsClicked]=useState(false);
    const [type,setType]=useState('skin');
    const [isTypeClicked,setTypeClicked]=useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(setIsChecked=>!setIsChecked);
};
const handleButton=(brandname)=>{
    setBrand(brandname);
}
const handleBrandButton=()=>{
    setIsClicked(true);
}
const handleTypeButton=(type)=>{
    setType(type);
    setTypeClicked(true);
}
let brandContent;
if(brand=='apple'){
    console.log("hello")
    brandContent = (
    <>
        <p style={{width:"52em"}}>Select your device:</p>
       <select style={{fontSize: "1.2em",padding: "1em",width: "30em",borderRadius:"8px"}} className="" name="device">
        <option onClick={handleBrandButton} value="">Choose your device</option>
        <option onClick={handleBrandButton} value="3274">iPhone 15 Pro Max </option>
        <option onClick={handleBrandButton} value="3275">iPhone 15 Pro </option>
        <option onClick={handleBrandButton} value="3276">iPhone 15 Plus </option>
        <option onClick={handleBrandButton} value="3277">iPhone 15 </option>
        <option onClick={handleBrandButton} value="2776">iPhone 14 Pro Max </option>
        <option onClick={handleBrandButton} value="2774">iPhone 14 Pro </option>
        <option onClick={handleBrandButton} value="2775">iPhone 14 Plus </option>
        <option onClick={handleBrandButton} value="2773">iPhone 14 </option>
        <option onClick={handleBrandButton} value="2559">iPhone 13 Pro Max </option>
        <option onClick={handleBrandButton} value="2561">iPhone 13 Pro </option>
        <option onClick={handleBrandButton} value="2563">iPhone 13 </option>
        <option onClick={handleBrandButton} value="2565">iPhone 13 mini </option>
        <option onClick={handleBrandButton} value="2211">iPhone 12 Pro Max </option>
        <option onClick={handleBrandButton} value="2212">iPhone 12 Pro </option>
        <option onClick={handleBrandButton} value="2213">iPhone 12 </option>
        <option onClick={handleBrandButton} value="2214">iPhone 12 mini </option>
        <option onClick={handleBrandButton} value="2291">Apple MagSafe Charger </option>
        <option onClick={handleBrandButton} value="3337">MacBook Pro 16" (2023, M3) </option>
        <option onClick={handleBrandButton} value="3121">MacBook Pro 16" (2023, M2) </option>
        <option onClick={handleBrandButton} value="2640">MacBook Pro 16" (2021, M1) </option>
        <option onClick={handleBrandButton} value="1858">MacBook Pro 16" (2019) </option>
        <option onClick={handleBrandButton} value="3338">MacBook Pro 14" (2023, M3) </option>
        <option onClick={handleBrandButton} value="3122">MacBook Pro 14" (2023, M2) </option>
        <option onClick={handleBrandButton} value="2641">MacBook Pro 14" (2021) </option>
        <option onClick={handleBrandButton} value="2728">MacBook Pro 13" (2022, M2) </option>
        <option onClick={handleBrandButton} value="2312">MacBook Pro 13" (2020, M1) </option>
        <option onClick={handleBrandButton} value="2057">MacBook Pro 13" (2020, Intel, Two Thunderbolt 3 Ports) </option>
        <option onClick={handleBrandButton} value="2058">MacBook Pro 13" (2020, Four Thunderbolt 3 Ports) </option>
        <option onClick={handleBrandButton} value="1645">MacBook Pro 13" (2019, Four Thunderbolt 3 Ports) </option>
        <option onClick={handleBrandButton} value="1509">MacBook Pro 13" (2019, Two Thunderbolt 3 Ports) </option>
        <option onClick={handleBrandButton} value="764">MacBook Pro 13" (2016-2018, Four Thunderbolt 3 Ports) </option>
        <option onClick={handleBrandButton} value="763">MacBook Pro 13" (2016-2018, Two Thunderbolt 3 Ports) </option>
        <option onClick={handleBrandButton} value="3380">MacBook Air 15" (2024, M3) </option>
        <option onClick={handleBrandButton} value="3196">MacBook Air 15" (2023, M2) </option>
        <option onClick={handleBrandButton} value="3381">MacBook Air 13.6" (2024, M3) </option>
        <option onClick={handleBrandButton} value="2789">MacBook Air 13.6" (2022, M2) </option>
        <option onClick={handleBrandButton} value="2313">MacBook Air 13" (2020, M1) </option>
        <option onClick={handleBrandButton} value="1990">MacBook Air 13" (2020, Intel) </option>
        <option onClick={handleBrandButton} value="1264">MacBook Air 13" (2018-2019) </option></select>
    </>
    )

}
else if(brand=='google'){
    brandContent = (
    <>
        <p>Select your device:</p>
        <div style={{margin: "0 18em",width: "40em"}}>
            <button className="button_2" onClick={handleBrandButton}>Pixel 8 Pro</button>
            <button className="button_2" onClick={handleBrandButton}>Pixel 7 Pro</button>
            <button className="button_2" onClick={handleBrandButton}>Pixel 7</button>
            <button className="button_2" onClick={handleBrandButton}>Pixel 6 Pro</button>
            <button className="button_2" onClick={handleBrandButton}>Pixel 6 </button>
        </div>
    </>
    )
}
else if(brand=='samsung'){
    brandContent = (
    <>
        <p  style={{textAlign:"center"}}>Select your device:</p>
        <div style={{margin: "0 18em",width: "40em"}}>
            <button className="button_2" onClick={handleBrandButton}>Galaxy S24 Ultra</button>
            <button className="button_2" onClick={handleBrandButton}>Galaxy S23 Ultra</button>
            <button className="button_2" onClick={handleBrandButton}>Galaxy S22 Ultra</button>
            <button className="button_2" onClick={handleBrandButton}>Galaxy S21 Ultra</button>
        </div>
    </>
    )
}
let modelContent;
if(isClicked){
    modelContent=(
    <>
     <p style={{width: "52em"}}>Select a product model:</p>
     <div style={{display:"flex"}}>
        <div onClick={()=>handleTypeButton('skin')}>
            <img src="" alt="" />
            <div>
                <h1>Skin</h1>
                <p>Ultimate Scratch Protection</p>
                <p>0.23mm thin</p>
                <p>Easy to apply</p>
            </div>
        </div>
        <div onClick={()=>handleTypeButton('case')}>
            <img src="" alt="" />
            <div>
                <h1>Case</h1>
                <p>Military-grade impact protection</p>
                <p>Revolutionary grip</p>
                <p>Tactile Grip</p>
            </div>
        </div>
     </div>
        <h1 style={{width: "30em"}}>Select a design:</h1>
             <button></button>
             <button></button>
             <div>
                <div>
                    <p>Price</p>
                    <p>Based on your current selection.</p>
                </div>
                {type === 'case' ? '$24.95' : '$54.90'}
             </div>
        </> 
    )
}

//     
 return (
    <div style={{backgroundColor: isChecked ? 'black' : 'white', color:isChecked ? 'white' : 'black'}}>
        <div style={{height:"40em"}}>
            <h1  style={{margin:"0",padding:"1em 0",fontSize:"3.5em",fontWeight: "200",letterSpacing: "5px"}}  className="dotMatrix">SOMETHING</h1>
            <img style={{width:"48em"}} className="move" src={isChecked ? sb1:sw1}/>
            <img style={{width:"48em"}} className="move" src={isChecked ?" ":s1}/>
            
        </div>
        <div style={{display:"flex",justifyContent:"space-between",heiht:"3em",padding: "1em 3em",color: isChecked ? 'black' : 'white', backgroundColor:isChecked ? 'white' : 'black' }}>
            <h1 style={{fontSize:"1.2em"}}>IT’S BETTER THAN NOTHING.</h1>
            <div>
                <label onClick={handleCheckboxChange} className="switch">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                    <span className="slider round"></span>
                </label>
                <button style={{backgroundColor: isChecked ? 'black' : 'white', color:isChecked ? 'white' : 'black'}}>BUY</button>
            </div>
        </div>
        <div  style={{display:"flex",justifyContent:"space-around"}}>
            <img style={{width: "16em",height:"27em",padding:"2em 9em",marginTop: "4em"}} src={isChecked ? sb2:sw2}/>
            <div style={{width: "36em",textAlign: "left"}}>
                <h1 style={{width: "6em",fontSize:"3.5em",fontWeight: "200",letterSpacing: "5px"}}className="dotMatrix">MINIMALISM FOR THE MASSES</h1>
                <p>Competing against Apple can't be easy. You're starting from nothing. Cash reserves? Light, to say the least. Worst of all, you need to contend with the fact that 50% of Americans prefer their fruit-branded smartphone over your fancy new flashlight. Even with some of the best and brightest industrial designers on earth, you're still facing an uphill battle. To top it all off, you've got the assholes at dbrand slighting you with a plagiarized design for the competition. Sorry, Carl.</p>
            </div>
        </div>
        <div>
            <h1  className="dotMatrix" style={{fontSize:"3.5em",fontWeight: "200",letterSpacing: "5px"  }}>SOMETHING DARK</h1>
            <div>
                <img style={{width:"63em"}} src={isChecked ? sb3:sw3} />
               
            </div>
        </div>
        <hr/>
        <div  style={{display:"flex",justifyContent:"space-around",padding: "0 6em"}}>
            <div style={{width: "36em",textAlign: "left"}}>
                <h1  style={{width: "6em",fontSize:"3.5em",fontWeight: "200",letterSpacing: "5px"}} className="dotMatrix">PLAGIARISM IS NOT A CRIME</h1>
                <p>Some might accuse us of theft. Here's our counter: we stole nothing. We're simply shining a light on the limits of international copyright law. Given our years of experience in such matters, we're uniquely qualified to rip off an industrial design and "creatively reinterpret" it for other devices. That's not theft - it's plagiarism, which isn't a crime. Look on the bright side: at least we're paying them in exposure.</p>
            </div>
            <img style={{width: "16em",height:"27em",padding:"2em 9em",marginTop: "4em"}} src={isChecked ? sb4:sw4} className="move"/>
        </div>

        <div style={{ height: isClicked ? "90em" : isTypeClicked ? "90em" : "35em" }}>
            <h1 style={{fontSize:"5em",marginBottom:"0"}}>Ready to buy?</h1>
            <p style={{width: "31em",marginTop: "0",fontSize: "2.5em"}}>Select your device's manufacturer:</p>
            <div>
                <button className="button_2" onClick={()=>handleButton('apple')}>Apple</button>
                <button className="button_2"  onClick={()=>handleButton('google')}>Google</button>
                <button className="button_2"  onClick={()=>handleButton('samsung')}>Samsung</button>
                {brandContent}
                {modelContent}
            </div>
        </div>
    </div>
  )
}

export default Something