import React from 'react'

export default function Work() {
  return (
    <section className="work">
        <div className="work-wrapper">
            <div className="work-headline">
                <h3 id="how">How Does It Work?</h3>
            </div>
            <div className="iphone-bilder">
                <img id="iphonework" src="Images/iphonework_1.svg" alt="En bild på en iphone med appen öppen" />
                <img id="iphonework" src="Images/Iphonework_2.svg" alt="En bild på en iphone med appen öppen" />
                <img  src="Images/Iphonework_3.svg" alt="En bild på en iphone med appen öppen" />
            </div>
            <div className="transaction-container">
                <h3 id="transaction-1">Latest transaction history</h3>
                <h3 id="transaction-2">Transfers to people from your contact list</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum corrupti alias repellendus? Neque quo veniam minima voluptatum nam reiciendis?</p>
            </div>
        </div>
    </section>
  )
}
