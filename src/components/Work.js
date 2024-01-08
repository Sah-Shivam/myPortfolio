import "./WorkCardStyle.css"
import WorkCard from "./WorkCard"
import workCardData from "./WorkCardData"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="projects-container">
                {/* <div className="project-card">
                   <img src={project1}  alt="image"/>
                   <h2 className="project-tittle">
                    Project Title </h2>
                    <div className="pro-detials">
                     <p>This is text </p> 
                     <div className="pro-btns">
                        
                        <div className="btn"><NavLink to="url.com" 
                        >View
                        </NavLink></div>     
                       
                        <div className="btn">
                        <NavLink to="url.com"  >Source
                        </NavLink>
                        </div>
                    </div>
                    </div>
                </div> */}
                {workCardData.map((val , index) => {
                    return(
                       <WorkCard
                          key={index}
                          imgsrc={val.imgsrc}
                          title={val.title}
                          text = {val.text}
                          view={val.view}
                       /> 
                    )
                })}
        </div>
    </div>
  )
}

export default Work