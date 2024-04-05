import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import StarRating from './StarRating';
import avisData from '../data/avis.json';
import '../style/Avis.css';

const Avis = () => {
    // Diviser avisData en groupes de trois
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const avisChunks = chunkArray(avisData, 3); 

    return (
        <div className="avisContainer">
            <div className="titre">
            <h3>Avis de nos clients</h3>
            <h2>Découvrez ce que nos clients disent</h2>
            </div>

            <Carousel>
                {avisChunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div className="row">
                            {chunk.map((avis, subIndex) => (
                                <div key={subIndex} className="col-md-4">
                                    <Card className="avisCard">
                                        <Card.Body>
                                            <Card.Text>{avis.avis}</Card.Text>
                                            <div className='bottomCard'>
                                            <Card.Text>{`${avis.prenom} ${avis.nom}`}</Card.Text>
                                            <StarRating rating={avis.note} /> 
                                            </div>
                                        </Card.Body>
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