import "./FooterStyle.css"
import React from "react"

import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",
                 marginRight: "2rem"}}/>
                 <div>
                    <p >MMMUT Gorakhpur</p>
                    <p>India</p>
                 </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:
                "#fff",marginRight: "2rem"}}/>
               +91-639-276-8465 </h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:
                "#fff",marginRight: "2rem"}}/>
               sahshivam6392@gmail.com </h4>
            </div>
        </div>


        <div className="right">
            <h4>Useful Links</h4>
             <div className="social">
               <FaLinkedin 
                   size={30} 
                   style={{color: "#fff",
                   marginRight: "2rem"}}
                />
               
               <FaGithub 
                   size={30} 
                   style={{color: "#fff",
                   marginRight: "2rem"}}
                />
               
             </div>
        </div>
        </div>
    </div>
  )
}

export default Footer