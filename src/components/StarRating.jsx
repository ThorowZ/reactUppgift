import React from 'react'
import { useState } from 'react';


export default function StarRating({starRating}) {

    const Stars = [1, 2, 3, 4, 5]
    const maxStars = 5
    const validStarRating = Number.isInteger(starRating) && starRating >= 0 ? starRating :0;
    const filledStars = Math.min(validStarRating, maxStars)
    const emptyStars = maxStars - filledStars
    

    return (

    <div className='star-rating'>

        {
            [...Array(filledStars)].map((_, index) => (
                <i key={index} src="src\assets\Star\star.svg"></i>
            ))
        }

{
            [...Array(emptyStars)].map((_, index) => (
                <i key={index} src="src\assets\Star\emptyStar.svg"></i>
            ))
        }
       
    </div>
    
  )
}
