import "./PricingCards.css"
import React from 'react'
import {Link}  from "react-router-dom"

const PricingCards = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc"> - $100 - </p>
                <p> - 3 DAYS - </p>
                <p> - 3 PAGES - </p>
                <p> - FEATURES - </p>
                <p className="txt"> - Responsive Design - </p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3> - Premium - </h3>
                <span className="bar"></span>
                <p className="btc"> - $200 - </p>
                <p> - 3 DAY - </p>
                <p> - 5 PAGES - </p>
                <p> - FEATURES - </p>
                <p className="txt"> - Responsive Design - </p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>Basic</h3>
                <span className="bar"></span>
                <p className="btc"> - $300 - </p>
                <p> - 5 DAY - </p>
                <p> - 8 PAGES - </p>
                <p> - FEATURES - </p>
                <p className="txt">-Responsive Design-</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards