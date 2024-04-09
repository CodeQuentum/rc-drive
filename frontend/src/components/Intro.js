import React, { useState } from 'react';
import serviceData from '../data/service.json';
import gammeData from '../data/flotte.json';
import '../style/Intro.css';
import home from '../assets/images/home.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedGamme, setSelectedGamme] = useState('');
    const [departureAddress, setDepartureAddress] = useState('');
    const [arrivalAddress, setArrivalAddress] = useState('');
    const [pickupDateTime, setPickupDateTime] = useState('');
    const [passengerCounts, setPassengerCounts] = useState({ adult: 0, child: 0, infant: 0 });
    const [luggageCounts, setLuggageCounts] = useState({ cabin: 0, hold: 0, special: 0 });
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            clientName,
            email,
            phoneNumber,
            selectedService,
            selectedGamme,
            ...passengerCounts,
            ...luggageCounts,
            departureAddress,
            arrivalAddress,
            pickupDateTime
        });
        // Réinitialiser les champs du formulaire après soumission
        setClientName('');
        setEmail('');
        setPhoneNumber('');
        setSelectedService('');
        setSelectedGamme('');
        setDepartureAddress('');
        setArrivalAddress('');
        setPickupDateTime('');
        setPassengerCounts({ adult: 0, child: 0, infant: 0 });
        setLuggageCounts({ cabin: 0, soute: 0, special: 0 });

    };

    return (
        <div className="introContainer" style={{ backgroundImage: `url(${home})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '50px' }}>
            <div className="imageOverlay"></div>
            <div className="introContent">
                <div className="leftContent">
                    <h3>Offrez-vous un voyage en toute sérénité</h3>
                    <h2>RC Drive - Chauffeur privé</h2>
                    <p>Nous sommes à votre disposition pour vous conduire dans les meilleures conditions à <span>Paris</span> et sa <span>région</span>.<br />
                    Parceque votre confort est notre première préoccupation, vous serrez transporté à bord d'un véhicule haut de gamme tout équipé : <br />
                    Accès internet <span>wifi gratuit</span>, <span>journaux</span>, <span>friandise</span>, <span>bouteille d'eau</span> et <span>chargeur</span> pour smartphone. <br />
                    Tous nos véhicules sont également équipés de <span>terminaux CB</span> pour votre confort de paiement.</p>
                    <ul>
                        <li>Attente avec pancarte à votre nom pour les gares et aéroports</li>
                        <li>Tous nos chauffeurs ont une licence</li>
                        <li>Entreprise de confiance</li>
                        <li>Devis clair et transparent</li>
                    </ul>
                </div>
                
                <div className="rightContent">
                    <form onSubmit={handleFormSubmit}>
                        <section id="contact"><h2>Demandez un devis !</h2></section>
                        <div className="form-group">
                        <label htmlFor="clientName">Nom & Prénom</label>
                            <input
                                type="text"
                                className="form-control"
                                id="clientName"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                placeholder="Dutronc Jacques"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Numéro de téléphone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="06 XX XX XX XX"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse e-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="j.dutronc@exemple.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Quel service vous intéresse ?</label>
                            <select
                                    className="form-control"
                                    id="service"
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}>
                                <option value="">Choisir dans la liste</option>
                                    {serviceData.map((service) => (
                                <option key={service.id} value={service.title}>
                                {service.title}
                                </option>
                                    ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gamme">Quelle gamme vous intéresse ?</label>
                        <select
                        className="form-control"
                        id="gamme"
                        value={selectedGamme}
                        onChange={(e) => setSelectedGamme(e.target.value)}>
                        <option value="">Choisir dans la liste</option>
                        {gammeData.flotte.map((gamme, index) => (
                        <option key={index} value={gamme.title}>
                        {gamme.title}
                        </option>
                        ))}
                        </select>
                        </div>
                        <div className="passengerLuggageSection">
                            <div className="passengersSection">
                                <label>Passagers :</label>
                                <div className="inputGroup">
                                    <label>Adultes :</label>
                                    <input type="number" className="form-control" value={passengerCounts.adult} onChange={(e) => setPassengerCounts({ ...passengerCounts, adult: parseInt(e.target.value) })} />
                                </div>
                                <div className="inputGroup">
                                    <label>-10 ans :</label>
                                    <input type="number" className="form-control" value={passengerCounts.child} onChange={(e) => setPassengerCounts({ ...passengerCounts, child: parseInt(e.target.value) })} />
                                </div>
                                <div className="inputGroup">
                                    <label>-2 ans :</label>
                                    <input type="number" className="form-control" value={passengerCounts.infant} onChange={(e) => setPassengerCounts({ ...passengerCounts, infant: parseInt(e.target.value) })} />
                                </div>
                            </div>
                            <div className="luggageSection">
                                <label>Bagages :</label>
                                <div className="inputGroup">
                                    <label>Cabine :</label>
                                    <input type="number" className="form-control" value={luggageCounts.cabin} onChange={(e) => setLuggageCounts({ ...luggageCounts, cabin: parseInt(e.target.value) })} />
                                </div>
                                <div className="inputGroup">
                                    <label>Soute :</label>
                                    <input type="number" className="form-control" value={luggageCounts.hold} onChange={(e) => setLuggageCounts({ ...luggageCounts, hold: parseInt(e.target.value) })} />
                                </div>
                                <div className="inputGroup">
                                    <label>Spéciaux :</label>
                                    <input type="number" className="form-control" value={luggageCounts.special} onChange={(e) => setLuggageCounts({ ...luggageCounts, special: parseInt(e.target.value) })} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="departureAddress">Adresse de départ</label>
                            <input type="text" className="form-control" id="departureAddress" placeholder='N°, rue, code postal, ville' value={departureAddress} onChange={(e) => setDepartureAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="arrivalAddress">Adresse d'arrivée</label>
                            <input type="text" className="form-control" id="arrivalAddress" placeholder='N°, rue, code postal, ville' value={arrivalAddress} onChange={(e) => setArrivalAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pickupDateTime">Date et heure de prise en charge</label>
                            <input type="datetime-local" className="form-control" id="pickupDateTime" value={pickupDateTime} onChange={(e) => setPickupDateTime(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Demandez votre devis gratuit !</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Intro;