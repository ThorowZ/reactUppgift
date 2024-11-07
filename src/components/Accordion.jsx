import React from 'react'

export default function Accordion
() {
  return (
    <div className='p-5 bg-slate-900 flex justify-self-start'>
      <div className=' px-16 rounded-lg'
      style={{backgroundColor: 'var(--bck-clr_dark4'}}>
      <p className='text-xl'>Is any of my personal information stored in the App?</p>
      <button className='p-5 bg-gray-700 border border-gray-900 shadow-md ' >
        <i className="fa-solid fa-chevron-up">
          <img src="Images\Accordion\chevron-up-solid.svg" alt="Chevron" />
        </i>
      </button>
      <div className=''></div>
      </div>
    </div>
  )
}
