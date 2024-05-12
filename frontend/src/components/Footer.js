import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <Container>
                <div className="footerContent"> 
                    <p>Adresse: 44 rue de la therouanne, 77380 Combs-la-Ville, France</p>
                    <p>Téléphone: +33 6 02 68 50 14</p>
                    <p>Mail : rcdrive.prestige@gmail.com</p>
                    <p>© 2024 RC Drive. Tous droits réservés.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
