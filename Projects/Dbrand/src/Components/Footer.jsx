import React from 'react'
import './Footer.css'

import twitter from '../assets/twitter-yellow.png'
import insta from '../assets/instagram-yellow.png'
import discord from '../assets/discord-2-yellow.png'
import youtube from '../assets/youtube-yellow.png'

import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import paypal from '../assets/paypal.png'

import mail from '../assets/mail.png'
import address from '../assets/address.png'


const Footer = () => {
  return (
    <div className="part-3">
        <div className="container--one">
            <nav style={{alignItems: "center"}}>
                <p style={{fontSize:".8em",textAlign:"left"}}>Meet our Robots:</p><br/>
                <img id="image--a" src={twitter}/>
                <img id="image--a" src={insta}/> 
                <img id="image--a" src={discord}/> 
                <img id="image--a" src={youtube}/>
            </nav>
            <nav style={{padding: "1em",color: "#fb0",height: "1em",width: "15em"}}>
                <h1 style={{margin: "0",  textAlign: "right"}}>Subscribe to your NewsLetter</h1>
                <div style={{display:"flex",margin:"1em 0",width:"22em"}}>
                    <input type="email" placeholder="EMAIL ADDRESS" required  style={{width:"28em",fontSize:".7em"}}/>
                    <button>SIGN UP</button>
                </div>
            </nav>
        </div>
        <div className="container--two">
            <nav style={{height:"22em"}}>
                <h1>Skins<span>  // </span></h1>
                    <ul className="container--two-a">
                        <li>iphone skins</li>
                        <li>pixel skins</li>
                        <li>samsung galaxy skins</li>
                        <li>oneplus skins</li>
                        <li>macbook skins</li>
                        <li>razer blade skins</li>
                        <li>dell xps skins</li>
                        <li>surface skins</li>
                        <li>ipad + pencil skins</li>
                        <li>ipad keyboard skins</li>
                        <li>airpods skins</li>
                        <li>nintendo switch skins</li>
                        <li>xbox skins</li>
                        <li>skins compatible with playstations</li>
                        <li>steelseries skins</li>
                        <li>lenovo skins</li>
                    </ul>
                <h1>phone cases<span>   //</span></h1>
                    <ul  className="container--two-b">
                        <li>iphone phone cases</li>
                        <li>oneplus phone cases</li>
                        <li>pixel phone cases</li>
                        <li>samsung galaxy phone cases</li>
                    </ul>
                    <h1>clear cases<span>   //</span></h1>
                    <ul  className="container--two-b">
                        <li>ghost</li>
                    </ul>    
                <h1>screen protectors<span>    //</span></h1>
                    <ul  className="container--two-c">
                        <li>iphone 13 screen protectors</li>
                        <li>iphone 12 screen protectors</li>
                        <li>nintendo switch screen protectors</li>
                        <li>steam deck screen protectors</li>
                    </ul>
            </nav>   
            <div className="container--three" style={{display:"flex"}}>
                <nav className="container--three--c">
                    <h1>company<span>   //</span></h1>
                    <div>
                        <nav><img style={{width:"1.5em"}} id="image--a" src={mail}/></nav>
                        <nav>
                            <p>robots@dbrand.com</p><p style={{color:"#fb0"}}>Contact Us</p><br/>
                        </nav>
                    </div>
                    <div>
                        <nav><img style={{width:"1.5em"}} id="image--a" src={address}/></nav>
                        <nav>
                            <p>dbrand</p><p>CP.O. Box 98190</p><p>970 Queen Street East</p><p>Toronto, ON M4M 1J0</p><p>Toronto, ON M4M 1J0</p>
                        </nav>
                    </div>
                </nav>
                <nav className="container--three--a" >
                    <h1>payment methods<span>   //</span></h1>
                    <ul>
                        <li style={{width:"4em"}}><img id="image--a" src={visa}/></li>
                        <li style={{width:"3em"}}><img id="image--a" src={mastercard}/></li>
                        <li style={{width:"4em"}}><img id="image--a" src={paypal}/></li>
                    </ul>
                </nav>
            </div> 
        </div>
       
            <nav className="container--three--b">
                <h1>bits and bytes<span>    //</span></h1>
                <ul>
                    <li>Contact Us</li>
                    <li >Giveaways</li>
                    <li>Shipping</li>
                </ul>
            </nav>
        
        
        <div  className="footer" >
            <nav style={{margin: "0"}}><p>dbrand © 4022 :: All rights reserved</p></nav>
            <nav style={{display: "flex",flexDirection:"row",margin: "0",height: "0",fontSize: ".8em"}}>
                <p>Refund Policy</p><span>//</span><p>Privacy Policy</p><span>//</span><p>Website Terms of condition</p><span>//</span>
            </nav>
        </div>
    </div>
  )
}

export default Footer;