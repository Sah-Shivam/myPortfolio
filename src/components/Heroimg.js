import "./HeroimgStyle.css";
import homebg from "../assets/Homebg.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask"> 
           <img className="Homebg" src={'https://img.freepik.com/free-vector/binary-code-algorithm-digital-data-background_1017-30366.jpg?w=826&t=st=1704634558~exp=1704635158~hmac=c0bf2398f15eff9ec41f390d998ad10579e38ebdfe9bcd03b0974e797d5f0f0d'}  alt="homebg"/>
        </div>
        <div className="content">
            <p>HI, I'M A FRONT-END.</p>
            <h1>REACT DEVELOPER.</h1>
            <div>
                <Link to="/projects"className="btn"> 
                     PROJECTS
                 </Link>
                <Link to="/Contact"className="btn btn-light"> 
                     CONTACT
                 </Link>
            </div>

        </div>
    </div>
  )
}

export default Heroimg