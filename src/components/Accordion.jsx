import React from 'react'

export default function Accordion(item) {


  return (
    <div className='p-5 bg-slate-900'>
      <div className='py-4 px-4 rounded-lg flex items-center max-w-3xl w-full'
      style={{backgroundColor: 'var(--bck-clr_dark4)'}}>
      <h3 className='text-lg text-white'>{item.title}</h3>
          <div className='flex justify-end flex-1'>
            <button className='p-2.5 bg-gray-700 border border-gray-900 shadow-md rounded-full ' >
              <i className="fa-solid fa-chevron-up">
              </i>
            </button>
          </div>
        <p className='answer text-white'>
          {item.content}
        </p>
      </div>
    </div>
  )
}
