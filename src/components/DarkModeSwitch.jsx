import React, { useState, useEffect } from 'react';

export default function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(true);


  
  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);

    
  };

  

  useEffect(() => {
    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }, [isDarkMode]);

  const enableDarkMode = () => {
    
    document.body.classList.add('dark');
    document.body.classList.remove('light'); 
  };

  const disableDarkMode = () => {
    document.body.classList.add('light'); 
    document.body.classList.remove('dark'); 
  };

  

  return (
    <div>
      <p className="theme-text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
      <label className="toggle" htmlFor="darkmode-switch" aria-label="darkmode-switch">
        <input type="checkbox" id="darkmode-switch" checked={isDarkMode} onChange={toggleSwitch} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
