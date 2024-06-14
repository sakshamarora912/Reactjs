import React from 'react'
import { Link} from 'react-router-dom';
import ME_PHOTO from '../assets/images/ME_PHOTO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CSS/footer.css'

const div = () => {
  return (
    <div className="main-footer" style={{backgroundColor: "black",color: "white",height:"12em",padding:"1em"}}>
        <nav style={{display:"flex",justifyContent: "space-around",textAlign:"center"}}>
            <div className="card">
                <div className="box">
                    <div className="front" style={{ backgroundImage: `url(${ME_PHOTO})` }}></div>
                    <div className="back">
                        <div className="content">
                            <h1>Saksham <br/> Arora</h1>
                            <h4>Front-End<br/>Developer</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{flexDirection:"row"}}>
                <ul >
                    <li><Link style={{color: "white",textDecoration:"none"}} to='/privacy-policy'>Privacy Policy</Link></li>
                    <li><Link style={{color: "white",textDecoration:"none"}} to='/term-policy'>Terms of service</Link></li>
                </ul>
                <ul style={{flexDirection: "row"}}>
                    <li><Link style={{color: "white",textDecoration:"none"}} to="contact-us.html">Contact Us</Link></li>
                </ul><br/>   
                <ul>
                    <li style={{textAlign: "center"}}><b>SAKSHAM</b></li><br/>
                    <li style={{textAlign: "center"}}><b><span>Localhost is a software created with</span><span style={{color:"red",fontSize:"2em",verticalAlign:"sub"}}>&hearts;</span>by SAkSHAM ARORA</b></li>
                </ul>
            </div >
            <div style={{display: "flex",flexDirection: "column"}}>
                <h1 style={{fontSize: ".9rem"}}>Follow us on Social networks</h1>
                <div style={{flexDirection: "roW",textAlign:"center"}} id="social--media"> 
                    <Link to="https://www.instagram.com/saksham__arora__/">
                        <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                        </Link>
                    <Link to="https://discord.com/channels/@me">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp"/>
                            </Link>
                    <Link to="https://discord.com/channels/@me">
                        <FontAwesomeIcon icon="fa-brands fa-telegram"/>
                            </Link>
                </div>
            </div> 
        </nav>
    </div>
  )
}

export default div