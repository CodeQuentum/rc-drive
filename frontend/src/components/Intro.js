import React from 'react';
import '../style/Intro.css';
import home from '../assets/images/home.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
    const introContainerStyle = {
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: '#fff', 
        padding: '50px',
    };

    return (
        <div className="introContainer" style={introContainerStyle}>
            <div className="introContent">
                <div className="leftContent">
                    <h3>Solution de déplacement de qualité</h3>
                    <h2>Chauffeur privé sur demande</h2>
                    <p>Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum. Elit adipiscing massa diam in dignissim. Risus tellus libero elementum aliquam etiam. Lectus adipiscing est auctor mi quisque nunc non viverra est.</p>
                    <ul>
                        <li>Tous nos chauffeurs ont une licence</li>
                        <li>Entreprise de confiance</li>
                        <li>Devis clair et transparent</li>
                    </ul>
                </div>
                <div className="rightContent">
                    <form>
                        <h2>Demandez un devis !</h2>
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" className="form-control" id="nom" placeholder="Dutronc" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" className="form-control" id="prenom" placeholder="Jacques" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Numéro de téléphone</label>
                            <input type="text" className="form-control" id="telephone" placeholder="06 XX XX XX XX" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse mail</label>
                            <input type="email" className="form-control" id="email" placeholder="j.dutronc@exemple.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Choisissez votre service</label>
                            <input type="text" className="form-control" id="service" placeholder="choisir dans la liste" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Nous sommes à votre écoute</label>
                            <textarea className="form-control" id="message" placeholder="J'arrive à l'aéroport à 15h..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Demandez votre devis gratuit !</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Intro;