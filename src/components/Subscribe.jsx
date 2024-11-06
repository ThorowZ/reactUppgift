import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

export default function Subscribe() {

  const [Mail, setMail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    alert('Successfully submitted')
    
    if(Mail.trim() === '') return

    try {
      const res = await fetch('', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(FormData)
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log('Response data:', data); // Handle response data here
      } else {
        console.error('Request failed:', res.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleChange = (e) => {
    const { email, value} = e.target
    setFormData({...FormData, [Mail]: value})
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
