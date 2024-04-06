import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <Container>
                <div className="footerContent"> 
                    <p>Adresse: 123 Rue du VTC, Paris, France</p>
                    <p>Téléphone: +33 6 01 02 03 04</p>
                    <p>Mail : mail@exemple.fr</p>
                    <p>© 2024 RC Drive. Tous droits réservés.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
