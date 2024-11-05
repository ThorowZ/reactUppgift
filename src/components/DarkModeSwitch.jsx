import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function DarkModeSwitch() {

  const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode()
} else if(hasDarkmode === 'off') {
  disableDarkMode()
}




darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.add('light')


  document.querySelectorAll('.theme-text').forEach(el => {
    el.textContent = 'Light mode';
    el.style.color = 'var(--clr-text-gray)';
  });
  

}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('light')
  

  document.querySelectorAll('.theme-text').forEach(el => {
    el.textContent = 'Dark mode';
    el.style.color = 'black';
  });

}

    

  return (
    <div>
      <p class="theme-text"></p>
         <label class="toggle" for="darkmode-switch" aria-label="darkmode-switch">
            <input type="checkbox" id="darkmode-switch" />
            <span class="slider"></span>
         </label>
    </div>
  )
}
