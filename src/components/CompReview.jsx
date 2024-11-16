import React from 'react'
import StarRating from './StarRating'



export default function compReview({item}) {
    // console.log("CompReview received item:", item);


  return (
      <section className="review">
        <div className="review-container">
            <div className="review-box">
                <img className="quotes" src="Images/review-img/quotes.svg" alt="quotes" />
                <StarRating starRating={item.starRating} />
                <p id="review-text">{item.comment}</p>
                <div className="review-id">
                    <img className="person" src={item.avatarUrl} alt="Profil bild" />
                    <p className="namn">{item.author}</p>
                    <p className="job">{item.jobRole}</p>
                </div>
            </div>
        </div>
    </section>
    
  )
}
