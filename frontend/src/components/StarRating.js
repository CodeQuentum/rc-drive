import React from 'react';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i}>&#9733;</span>); // Etoile pleine
        } else {
            stars.push(<span key={i}>&#9734;</span>);  // Etoile vide
        }
    }
    return <div>{stars}</div>;
};

export default StarRating;