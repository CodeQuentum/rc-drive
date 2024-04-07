import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import serviceData from '../data/service.json';
import '../style/Service.css';

const Service = () => {
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const serviceChunks = chunkArray(serviceData, 4);

    return (
        <div className="servicesContainer">
            <Container>
                <div className="titre">
                    <h3>Nos services</h3>
                    <h2>ON VOUS PROPOSE :</h2>
                </div>
                {serviceChunks.map((chunk, index) => (
                    <Row key={index} className="serviceRow">
                        {chunk.map((service, subIndex) => (
                            <Col key={subIndex} md={3} className="serviceCol">
                                <Card className="serviceCard">
                                    <Card.Body>
                                        <div className="serviceIcon">{service.icon}</div>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Service;