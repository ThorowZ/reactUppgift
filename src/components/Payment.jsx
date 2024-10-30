import React from 'react'

export default function Payment() {
  return (
    <section className="payment">
        <div className="transfer-container">
            <div className="info-container-1">
                <div className="info-text">
                    <h3 className="headline-info">Make your money transfer simple and clear</h3>
                    <div className="paragraph-info">
                        <div className="p-line">
                            <img src="Images/bx-check-circle.svg" alt="Checkmarker" />
                            <p>Banking transactions are free for you</p>
                        </div>
                        <div className="p-line">
                            <img src="Images/bx-check-circle.svg" alt="Checkmarker" />
                            <p>No monthly cash commission</p>
                        </div>
                        <div className="p-line">
                            <img src="Images/bx-check-circle.svg" alt="Checkmarker" />
                            <p>Manage payments and transactions online</p>
                        </div>
                    </div>
                    <button className="learn-more">Learn more
                    <img className="vector" src="Images/Vector.svg" alt="En pil" />
                    </button>
                </div>
            <img id="graf" src="Images/graf.svg" alt="Visar en bild på en graf samt en annan ruta där man kan skicka pengar" />
            </div>
        </div>
    </section>
  )
}
