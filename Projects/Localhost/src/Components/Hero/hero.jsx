import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

const hero = (props) => {
  return (
    <div>
      <div id="product-overview" style={{ backgroundImage: `url(${props.product_img})` }}>
        <h1>Get the freedom you deserve</h1>
        <h2>Register your own domain</h2> 
        <form style={{display: "flex"}}>
          <div className="www">www.</div>
          <input type="text" placeholder="fill in the domain you desire" autoFocus/>
          <select className="dropdown-domain" >
              <option className="domain" defaultValue="com">.com</option>
              <option className="domain">.net</option>
              <option className="domain">.in</option>
              <option className="domain">.org</option>
              <option className="domain">.co.in</option>
              <option className="domain">.biz</option>
              <option className="domain">.online</option>
          </select >
          <button>check</button>                  
        </form>
      <div className="btn" style={{width:"100%"}}><Link to="#target"><button className="btn btn-danger" style={{width: "7em",margin: "auto"}}>Show plans</button></Link></div>
    </div>
      <div className="introduction" style={{ backgroundImage: `url(${props.intro_img})` }}>
        <h1>Get the Best Web Hosting</h1>
        <h3>Create your website with this exclusive plans</h3>
        <ul>
          <li>Free Website Builder</li>
          <li>Auto WordPress Install</li>
          <li>Free SSL Certificate</li>
          <li>24/7/365 Live Support</li>
          <li>Industry Leading Money-Back Guarantee</li>
        </ul>
        <h2>Starting at</h2>
        <div>$2.99/month</div>
      <Link to="#target"><button className="btn btn-dark"style={{width: "7em",margin: "auto"}}>Get started</button></Link>
      </div>
    </div>
  )
}

export default hero