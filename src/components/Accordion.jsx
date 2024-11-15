import React from 'react'
import { useState } from 'react'

export default function Accordion(item) {

  const [isOpen, setisOpen] = useState(false)

  const toggleAccordion = () => {
    setisOpen(!isOpen)
  }


  return (
    <div className='p-5'>
    <div className={`py-4 px-4 rounded-lg flex flex-col items-center max-w-3xl w-full ${isOpen ? 'pass': ''}`}
      style={{backgroundColor: 'var(--bck-clr_dark4)'}}>
      <div className='flex flex-row self-stretch'>
      <h3 className='text-lg text-white '>{item.title}</h3>
          <div className='flex justify-end flex-1'>
            <button className='p-2.5 bg-gray-700 border border-gray-900 shadow-md rounded-full' onClick={toggleAccordion} >
              <i className={`fa-solid fa-chevron-up transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              </i>
            </button>
          </div>
        </div >
        <p className={`answer text-white ${isOpen ? 'block' : 'hidden'}`}>
          {item.content}
        </p>
      </div>
    </div>
  )
}
