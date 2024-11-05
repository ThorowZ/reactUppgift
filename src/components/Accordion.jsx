import React from 'react'

export default function Accordion
() {
  return (
    <div className='p-5 bg-slate-900 flex justify-self-center'>
      <div className='border border-black px-2 py-3 rounded-lg'>
      <p className='text-xl'>Is any of my personal information stored in the App?</p>
      <button>
        <i className="fa-solid fa-chevron-up"></i>
      </button>
      <div className=''></div>
      </div>
    </div>
  )
}
