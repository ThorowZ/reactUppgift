import React, { useState, useEffect } from 'react'
import CompReview from './CompReview'

export default function Review(item) {
    const [review, setreview] = useState([])
    
    const getReview = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        console.log("Fetched Reviews:", data);
        setreview(data)
    }

    useEffect(() => {
        getReview()
    }, [])
    

  return (
    <section className="review">
        <div className="review-container">
            <div className="review-header">
                <h3>Clients are Loving Our App</h3>
            </div>

            {
    review.map((review) => {
        console.log("Review Item:", review);
        return <CompReview key={review.id} item={review} />;
    })
}


            
                
        </div>
    </section>
  )
}
