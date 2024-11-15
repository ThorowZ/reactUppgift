import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

export default function Subscribe() {

  const [Mail, setMail] = useState({email: ''})
  const [submitted, setsubmitted] = useState(false)

  const handleOk = () => {
    setsubmitted(false)
  }

  const handleSubmit = async (e) => {
    console.log('submit in progress.')
    e.preventDefault()

    if (Mail.email.trim() === '') {
      console.error('Email is required.');
      return;
    }
  

    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({email: Mail.email}),
      });
  
      if (res.ok) {
        const text = await res.text(); 
  
   
        if (text) {
          const data = JSON.parse(text); 
          console.log("Response data:", data);
        }
        setsubmitted(true)
        setMail({email: ''})
        console.log('Successfully submitted and empty')
      } else {
        console.error('Request failed:', res.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (submitted) {
    return (
    <div className="flex items-center justify-center w-full h-full"
    style={{backgroundColor: 'var(--bck-clr_dark2'}}>
      <div className='infoSubmit bg-green-300 border border-green-600 w-1300 h-130 rounded-md shadow-lg text-center flex item-center justify-center flex-col'
      style={{width: '650px', height: '100px'}}>
        <h1 className='text-3xl font-semibold'>Thank you for subscribing to the newsletter</h1>
        <button className="conf-btn mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 "
        onClick={handleOk} >OK</button>
      </div>
    </div>
    )
  }
  

  const handleChange = (e) => {
    const { value } = e.target
    setMail({ email: value})
  }


  
  return (
    <section className="subscribe-section">
        <div className="subscribe-container">
            <div className="sub-text">
                <img src="Images/subscribe/notification.svg" alt="notification klocka" />
                <h3 className='text-white'>Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>
            <form className="input-container" onSubmit={handleSubmit}>
                <img className="envelope" src="Images/subscribe/bx-envelope.svg" alt="" />
                <input value={Mail.email} onChange={(e) => setMail({email: e.target.value})} className="form-input email" type="email" placeholder="Your Email" />
                <button className="sub-knapp" type="submit" >Subscribe</button>
            </form>
        </div>
    </section>
  )
}
