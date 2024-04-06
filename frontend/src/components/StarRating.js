import React from 'react';
import '../style/StarRating.css';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i} className="star filled-star">&#9733;</span>); // Etoile pleine
        } else {
            stars.push(<span key={i} className="star">&#9734;</span>); // Etoile vide
        }
    }
    return <div className="star-rating">{stars}</div>; // Container pour les étoiles
};

export default StarRating;