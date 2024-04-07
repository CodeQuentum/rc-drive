import React, { useState } from 'react';
import serviceData from '../data/service.json';
import '../style/Intro.css';
import home from '../assets/images/home.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
    const [selectedService, setSelectedService] = useState('');

    const introContainerStyle = {
        backgroundImage: `url(${home})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '50px',
    };

    return (
        <div className="introContainer" style={introContainerStyle}>
            <div className="imageOverlay"></div>
            <div className="introContent">
                <div className="leftContent">
                    <h3>Offrez-vous un voyage en toute sérénité</h3>
                    <h2>Chauffeur privé</h2>
                    <p>Nous sommes à votre disposition pour vous conduire dans les meilleures conditions. Jamais un supplément ne vous sera demandé pour vos bagages. Dans nos véhicules, vous pourrez retrouver des rehausseurs pour vos enfants, des bouteilles d'eau, des chargeurs pour votre téléphone, ordinateur ou tablette, et même des friandises.</p>
                    <ul>
                        <li>Attente avec pancarte à votre nom pour les gares et aéroports</li>
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
                            <label htmlFor="service">Quel service vous intéresse ?</label>
                            <select
                                className="form-control"
                                id="service"
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                            >
                                <option value="">Choisir dans la liste</option>
                                {serviceData.map((service) => (
                                    <option key={service.id} value={service.title}>
                                        {service.title}
                                    </option>
                                ))}
                            </select>
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
};

export default Intro;