import React from 'react'

export default function Accordion
() {
  return (
    <div className='p-5 bg-slate-900'>
      <div className='py-4 px-4 rounded-lg flex items-center max-w-3xl w-full'
      style={{backgroundColor: 'var(--bck-clr_dark4)'}}>
      <p className='text-lg'>Is any of my personal information stored in the App?</p>
          <div className='flex justify-end flex-1'>
            <button className='p-2.5 bg-gray-700 border border-gray-900 shadow-md rounded-full ' >
              <i className="fa-solid fa-chevron-up">
              </i>
            </button>
          </div>
        <div className='answer'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet temporibus facere molestiae error vel? Nam, numquam! Obcaecati, totam. Provident mollitia beatae voluptate, libero iure corrupti nesciunt non atque repellat ut?
        </div>
      </div>
    </div>
  )
}
