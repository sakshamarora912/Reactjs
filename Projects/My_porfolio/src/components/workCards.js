import "./workCards.css"
import React from 'react'
import {NavLink} from "react-router-dom"

const WorkCards = (props) => {
  return (
    <div className="project-card">
          <img src={props.img_src} alt="img"/>
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to={props.source} className="btn">{props.source}</NavLink>
            </div>
          </div>
        </div>
  )
}

export default WorkCards
