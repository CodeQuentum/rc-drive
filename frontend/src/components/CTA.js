import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ScrollToSection from './ScrollToSection';
import '../style/CTA.css';

const CTA = () => {
    return (
        <div className="ctaContainer py-5">
            <Container>
                <Row>
                    <Col md={6} className="ctaText">
                        <div>
                            <h3 className="ctaSubtitle">C'est parti ?</h3>
                            <h2 className="ctaTitle">RÉSERVEZ VOTRE COURSE !</h2>
                        </div>
                    </Col>
                    <Col md={6} className="ctaButtonContainer text-md-right">
                        <ScrollToSection sectionId="contact">
                        <Button className="ctaButton">Demandez votre devis gratuit !</Button>
                        </ScrollToSection>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CTA;