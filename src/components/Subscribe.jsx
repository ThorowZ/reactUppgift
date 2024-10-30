import React from 'react'

export default function Subscribe() {
  return (
    <section className="subscribe-section">
        <div className="subscribe-container">
            <div className="sub-text">
                <img src="Images/subscribe/notification.svg" alt="notification klocka" />
                <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>
            <div className="input-container">
                <img className="envelope" src="Images/subscribe/bx-envelope.svg" alt="" />
                <input className="form-input email" type="email" placeholder="Your Email" />
                <button className="sub-knapp">Subscribe</button>
            </div>
        </div>
    </section>
  )
}
