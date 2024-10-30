import React from 'react'

export default function Review() {
  return (
    <section className="review">
        <div className="review-container">
            <div className="review-header">
                <h3>Clients are Loving Our App</h3>
            </div>
            <div className="review-box">
                <img className="quotes" src="Images/review-img/quotes.svg" alt="quotes" />
                <img src="Images/review-img/rating4star.svg" alt="Fyr sjärning review" />
                <p id="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellat amet, iure est similique rem. Fugit qui animi at, ipsa necessitatibus optio alias unde, amet cupiditate mollitia aut magni accusantium.</p>
                <div className="review-id">
                    <img className="person" src="Images/review-img/Fannie-Summers.svg" alt="Profil bild" />
                    <p className="namn">Fannie-Summers</p>
                    <p className="job">Designer</p>
                </div>
            </div>
            <div className="review-box">
                <img className="quotes" src="Images/review-img/quotes.svg" alt="quotes" />
                <img src="Images/review-img/rating5star.svg" alt="Fem sjärning review" />
                <p id="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellat amet, iure est similique rem. Fugit qui animi at, ipsa necessitatibus optio alias unde, amet cupiditate mollitia aut magni accusantium.</p>
                <div className="review-id">
                    <img className="person" src="Images/review-img/Albert-Flores.svg" alt="Profil bild" />
                    <p className="namn">Albert Flores</p>
                    <p className="job">Developer</p>
                </div>
            </div>
        </div>
    </section>
  )
}
