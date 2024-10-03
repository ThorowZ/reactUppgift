// För att det här scriptet ska fungera så behöver du lägga till en .dark klass i din css där du stylar dina färger
// du behöver också en checkbox med id="darkmode-switch" i din HTML


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

  // Tagit hjälp av Chatgpt
  document.querySelectorAll('.theme-text').forEach(el => {
    el.textContent = 'Light mode';
    el.style.color = 'var(--clr-text-gray)';
  });
  

}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('light')
  
    // Tagit hjälp av Chatgpt
  document.querySelectorAll('.theme-text').forEach(el => {
    el.textContent = 'Dark mode';
    el.style.color = 'black';
  });

}
