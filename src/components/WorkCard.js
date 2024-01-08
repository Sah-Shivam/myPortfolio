import "./WorkCardStyle.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-tittle">
        {props.title} </h2>
      <div className="pro-detials">
        <p>{props.text}</p>
        <div className="pro-btns">

          <div className="btn"><NavLink to={props.view}
          target ="#">View
          </NavLink></div>

          <div className="btn">
            <NavLink to="url.com"  >Source
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard