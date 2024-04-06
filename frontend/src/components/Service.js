import React from 'react';
import { Card } from 'react-bootstrap';
import serviceData from '../data/service.json';
import '../style/Service.css';

const Service = () => {
    return (
        <div className="servicesContainer">
            <div className='titre'>
                <h3>Nos services</h3>
                <h2>ON VOUS PROPOSE :</h2>
            </div>
            <div className="serviceCardsContainer">
                {serviceData.map((service, index) => (
                    <Card key={index} className="serviceCard">
                        <Card.Body>
                            <div className="serviceIcon">{service.icon}</div>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Service;