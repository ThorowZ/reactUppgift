import React from 'react'
import { useState } from 'react'

export default function Subscribe() {

  const [Mail, setMail] = useState('')

  const handleSubmit =(e) => {
    e.preventDefault()

    if(customName.trim() === '') return
  }
  
  return (
    <section className="subscribe-section">
        <div className="subscribe-container">
            <div className="sub-text">
                <img src="Images/subscribe/notification.svg" alt="notification klocka" />
                <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>
            <form className="input-container" onSubmit={handleSubmit}>
                <img className="envelope" src="Images/subscribe/bx-envelope.svg" alt="" />
                <input value={Mail} onChange={(e) => setMail(e.target.value)} className="form-input email" type="email" placeholder="Your Email" />
                <button className="sub-knapp" type="submit" >Subscribe</button>
            </form>
        </div>
    </section>
  )
}
