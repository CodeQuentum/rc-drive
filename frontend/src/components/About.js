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
                    <h2 className="title">Les meilleurs chauffeurs VTC depuis 2014</h2>
                    <p className="aboutText">
                        Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum. Elit adipiscing massa diam in dignissim. Risus tellus libero elementum aliquam etiam. Lectus adipiscing est auctor mi quisque nunc non viverra est. 
                        Venenatis nunc nunc vitae aliquam vestibulum. Elit adipiscing massa diam in dignissim. Risus tellus libero elementum aliquam etiam. Lectus adipiscing est auctor mi quisque nunc non viverr.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;