import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" ></input>
            <label>Your Email</label>
            <input type="email" ></input>
            <label>Subject</label>
            <input type="text" ></input>
            <label>Message</label>
            <input type="text" ></input>
            <textarea rows="5" placeholder="Type Your Message Here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form