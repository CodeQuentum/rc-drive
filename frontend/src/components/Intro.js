import React from 'react';
import '../style/Intro.css';
import home from '../assets/images/home.webp';

const Intro = () => {
    const introContainerStyle = {
        backgroundImage: `url(${home})`, // Utilisez l'image comme arrière-plan
        backgroundSize: 'cover', // Redimensionne l'image pour couvrir tout le conteneur
        backgroundPosition: 'center', // Centre l'image dans le conteneur
        color: '#fff', // Couleur du texte
        padding: '50px', // Espacement intérieur
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
                        <p>Nom</p>
                        <input type="text" placeholder="Dutronc" />
                        <p>Prénom</p>
                        <input type="text" placeholder="Jacques" />
                        <p>Numéro de téléphone</p>
                        <input type="text" placeholder="06 XX XX XX XX" />
                        <p>Adresse mail</p>
                        <input type="email" placeholder="j.dutronc@exemple.com" />
                        <p>Choississez votre service</p>
                        <input type="text" placeholder="choisir dans la liste" />
                        <p>Nous sommes à votre écoute</p>
                        <textarea placeholder="J'arrive à l'aéroport a 15h..."></textarea>
                        <button type="submit">Demandez votre devis gratuit !</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Intro;