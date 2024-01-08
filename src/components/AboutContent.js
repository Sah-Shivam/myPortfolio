import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p style={{textAlign:'justify'}}>Hi , I'm Shivam Prasad Sah, a driven B.Tech IT student at MMMUT. Navigating the MERN stack, I harmonize frontend and backend realms with finesse. Proficient in C++, JavaScript, and well-versed in Data Structures and Algorithms, I thrive on creative problem-solving. Embark on my web development journey through my portfolio, where innovation meets precision. </p>
            <Link to="/contact">
                 <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent