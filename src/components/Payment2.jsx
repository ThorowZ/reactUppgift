import React from 'react'

export default function Payment2() {
  return (
    <section>
        <div className="payment-2">
            <div className="info-container-2">
                <div className="contact">
                    <img src="Images/Contact.svg" alt="kontakt lista" />
                </div>
                <div className="info-grid-2">
                    <div className="headline-info-2">
                        <h3>Receive payment from international bank details</h3>
                    </div>
                    <div id="icon-container" className="icon-container-1">
                        <img src="Images/feature-logo/credit-card.svg" alt="credit kort" />
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                    <div id="icon-container" className="icon-container-2">
                        <img src="Images/feature-logo/wallet.svg" alt="Plånbok" />
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                    <button id="learn-more-2" className="learn-more">
                        Learn more
                        <img className="vector" src="Images/Vector.svg" alt="En pil" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
