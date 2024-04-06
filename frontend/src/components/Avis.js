import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import StarRating from './StarRating'; 
import avisData from '../data/avis.json';
import '../style/Avis.css';

const Avis = () => {
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const avisChunks = chunkArray(avisData, 3); 

    return (
        <div className="avisContainer text-center py-5">
            <div className='titre'>
                <h3>Avis de nos clients</h3>
                <h2>Découvrez ce que nos clients disent</h2>
            </div>

            <Carousel className="mt-5">
                {avisChunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div className="row justify-content-center">
                            {chunk.map((avis, subIndex) => (
                                <div key={subIndex} className="col-md-4 mb-4">
                                    <Card className="avisCard">
                                        <Card.Body>
                                            <Card.Title>{`${avis.prenom} ${avis.nom}`}</Card.Title>
                                            <Card.Text>{avis.avis}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <StarRating rating={avis.note} />
                                        </Card.Footer>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Avis;