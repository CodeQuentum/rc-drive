import React from 'react';
import '../style/About.css';
import aboutImage from '../assets/images/about.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">
                <div className="imageContainer">
                    <img src={aboutImage} alt="Chauffeur privé" className="img-fluid rounded aboutImage" />
                </div>
                <div className="textContainer">
                    <h3 className="subtitle">QUI SOMMES-NOUS ?</h3>
                    <h2 className="title">Les meilleurs chauffeurs VTC depuis 2015</h2>
                    <p className="aboutText">
                        RC Drive a été créé en 2015 pour répondre à la demande émergente des particuliers et des professionnels en matière de transport de personnes au quotidien.
                        Nous vous proposons un service haut de gamme par des chauffeurs professionnels.
                        Notre devise, <span>ponctualité</span>, <span>courtoisie</span>, <span>confidentialité</span> et <span>sécurité</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;