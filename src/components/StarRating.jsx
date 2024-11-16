import React from 'react'
import { useState } from 'react';


export default function StarRating({starRating}) {
    console.log("StarRating received starRating:", starRating);

    const Stars = [1, 2, 3, 4, 5]
    const maxStars = 5
    const validStarRating = Number.isInteger(starRating) && starRating >= 0 ? starRating :0;
    const filledStars = Math.min(validStarRating, maxStars)
    const emptyStars = maxStars - filledStars
    console.log("Received starRating", starRating);
    

    return (

    <div className='star-rating'>

        {
            [...Array(filledStars)].map((_, index) => (
                <img key={index} src="src\assets\Star\star.svg"></img>
            ))
        }

{
            [...Array(emptyStars)].map((_, index) => (
                <img key={index} src="src\assets\Star\emptyStar.svg"></img>
            ))
        }
       
    </div>
    
  )
}
