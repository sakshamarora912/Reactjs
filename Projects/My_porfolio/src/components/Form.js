import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea row="6" paceholder="Tyope Your Message"/>
        <button className="btn">Submit</button>
    </form>
  )
}

export default Form