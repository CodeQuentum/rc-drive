import React, { useState } from 'react';
import serviceData from '../data/service.json';
import gammeData from '../data/flotte.json';
import '../style/Intro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Devis = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        email: '',
        phoneNumber: '',
        selectedService: '',
        selectedGamme: '',
        departureAddress: '',
        arrivalAddress: '',
        pickupDateTime: '',
        passengerCounts: { adulte: null, enfant: null, bébé: null },
        luggageCounts: { cabinne: null, soute: null, special: null }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newValue = e.target.type === 'number' ? parseInt(value, 10) : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/mail/send-email', formData, {});
            console.log('Réponse du serveur :', response.data);
            alert('E-mail envoyé avec succès !');

            // Réinitialiser les champs du formulaire après soumission
            setFormData({
                clientName: '',
                email: '',
                phoneNumber: '',
                selectedService: '',
                selectedGamme: '',
                departureAddress: '',
                arrivalAddress: '',
                pickupDateTime: '',
                passengerCounts: { adulte: null, enfant: null, bébé: null },
                luggageCounts: { cabinne: null, soute: null, special: null }
            });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
            alert('Une erreur s\'est produite lors de l\'envoi de l\'e-mail. Veuillez réessayer.');
        }
    };

    return(
<div className="rightContent">
                    <form onSubmit={handleFormSubmit}>
                        <section id="contact"><h2>Demandez un devis !</h2></section>
                        <div className="form-group">
                            <label htmlFor="clientName">Nom & Prénom</label>
                            <input
                                type="text"
                                className="form-control"
                                id="clientName"
                                name="clientName"
                                value={formData.clientName}
                                onChange={handleInputChange}
                                placeholder="Dutronc Jacques"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Numéro de téléphone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="06 XX XX XX XX"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse e-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="j.dutronc@exemple.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectedService">Quel service vous intéresse ?</label>
                            <select
                                className="form-control"
                                id="selectedService"
                                name="selectedService"
                                value={formData.selectedService}
                                onChange={handleInputChange}>
                                <option value="">Choisir dans la liste</option>
                                {serviceData.map((service) => (
                                    <option key={service.id} value={service.title}>
                                        {service.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectedGamme">Quelle gamme vous intéresse ?</label>
                            <select
                                className="form-control"
                                id="selectedGamme"
                                name="selectedGamme"
                                value={formData.selectedGamme}
                                onChange={handleInputChange}>
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
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="adulte"
                                        name="passengerCounts.adulte"
                                        pattern="[0-9]*"
                                        value={formData.passengerCounts.adulte}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="inputGroup">
                                    <label>-10 ans :</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="enfant"
                                        name="passengerCounts.enfant"
                                        pattern="[0-9]*"
                                        value={formData.passengerCounts.enfant}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="inputGroup">
                                    <label>-2 ans :</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="bébé"
                                        name="passengerCounts.bébé"
                                        pattern="[0-9]*"
                                        value={formData.passengerCounts.bébé}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="luggageSection">
                                <label>Bagages :</label>
                                <div className="inputGroup">
                                    <label>Cabine :</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="cabinne"
                                        name="luggageCounts.cabinne"
                                        pattern="[0-9]*"
                                        value={formData.luggageCounts.cabinne}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="inputGroup">
                                    <label>Soute :</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="soute"
                                        name="luggageCounts.soute"
                                        pattern="[0-9]*"
                                        value={formData.luggageCounts.soute}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="inputGroup">
                                    <label>Spéciaux :</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="special"
                                        name="luggageCounts.special"
                                        pattern="[0-9]*"
                                        value={formData.luggageCounts.special}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="departureAddress">Adresse de départ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="departureAddress"
                                name="departureAddress"
                                placeholder="N°, rue, code postal, ville"
                                value={formData.departureAddress}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="arrivalAddress">Adresse d'arrivée</label>
                            <input
                                type="text"
                                className="form-control"
                                id="arrivalAddress"
                                name="arrivalAddress"
                                placeholder="N°, rue, code postal, ville"
                                value={formData.arrivalAddress}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pickupDateTime">Date et heure de prise en charge</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="pickupDateTime"
                                name="pickupDateTime"
                                value={formData.pickupDateTime}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Demandez votre devis gratuit !</button>
                    </form>
                </div>
)};

export default Devis;