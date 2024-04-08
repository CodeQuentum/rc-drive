import React from 'react';
import vehicleData from '../data/flotte.json';
import '../style/Flotte.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import gammeClassiqueLogo from '../assets/logo-voiture/gamme-classique.png';
import gammeBerlineLogo from '../assets/logo-voiture/gamme-berline.png';
import gammeVanLogo from '../assets/logo-voiture/gamme-van.jpg';

const Flotte = () => {
  const getImageForRange = (range) => {
    switch (range.title) {
      case 'Classique avec Chauffeur':
        return gammeClassiqueLogo;
      case 'Berline avec Chauffeur':
        return gammeBerlineLogo;
      case 'Van avec Chauffeur':
        return gammeVanLogo;
      default:
        return null;
    }
  };

  return (
    <div className="flotteComponent">
      <h2 className="text-center">Nos gammes de véhicules</h2>
      <div className="row justify-content-center">
        {vehicleData.flotte.map((range, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="flotteCard card h-100">
              <img src={getImageForRange(range)} className="card-img-top" alt={range.title} />
              <div className="card-body">
                <h3 className="card-title">{range.title}</h3>
                <p className="card-text">{range.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flotte;