import '../style/Intro.css';
import home from '../assets/images/home.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Devis from './Devis'

const Intro = () => {

    return (
        <div className="introContainer" style={{ backgroundImage: `url(${home})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '50px' }}>
            <div className="imageOverlay"></div>
            <div className="introContent">
                <div className="leftContent">
                    <h3>Offrez-vous un voyage en toute sérénité</h3>
                    <h2>RC Drive - Chauffeur privé</h2>
                    <p>Nous sommes à votre disposition pour vous conduire dans les meilleures conditions à <span>Paris</span> et sa <span>région</span>.<br />
                        Parce que votre confort est notre première préoccupation, vous serez transporté à bord d'un véhicule haut de gamme tout équipé : <br />
                        Accès internet <span>wifi gratuit</span>, <span>journaux</span>, <span>friandise</span>, <span>bouteille d'eau</span> et <span>chargeur</span> pour smartphone. <br />
                        Tous nos véhicules sont également équipés de <span>terminaux CB</span> pour votre confort de paiement.</p>
                    <ul>
                        <li>Attente avec pancarte à votre nom pour les gares et aéroports</li>
                        <li>Tous nos chauffeurs ont une licence</li>
                        <li>Entreprise de confiance</li>
                        <li>Devis clair et transparent</li>
                    </ul>
                </div>
                <Devis />
            </div>
        </div>
    );
};

export default Intro;