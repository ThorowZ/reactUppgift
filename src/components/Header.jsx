import React from 'react';

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-content">
        <div className="text-card">
          <div className="header-card">
            <h1 className="header1" aria-label="Manage money">Manage All Your Money in One App</h1>
          </div>
          <p className="subheader">
            We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
          </p>
          <div className="market-btns">
            <img src="/Images/Apple.svg" alt="Apple Store" />
            <img src="/Images/Google.svg" alt="Google Store" />
          </div>
          <div className="more">
            <img src="/Images/more.svg" alt="Discover More" />
          </div>
        </div>
        <div className="iphone-container">
          <div className="iphone12">
            <img src="Images/iPhone12Pro.svg" alt="iPhone 12 Pro" />
            <img src="Images/iPhone12Pro(1).svg" alt="iPhone 12 Pro" />
          </div>
        </div>
      </div>
    </header>
  );
}
