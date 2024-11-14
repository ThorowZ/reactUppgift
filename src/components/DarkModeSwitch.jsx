import React, { useState, useEffect } from 'react';

export default function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, [isDarkMode]);

  const enableDarkMode = () => {
    document.body.classList.add('dark-mode'); 
  };

  const disableDarkMode = () => {
    document.body.classList.remove('dark-mode'); 
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
