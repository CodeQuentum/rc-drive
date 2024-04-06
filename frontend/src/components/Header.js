import React from 'react';
import ScrollToSection from './ScrollToSection';
import '../style/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="chemin/vers/votre/image.jpg" alt="Logo du site" className="mr-2" width="50" height="50" />
          <span className="companyName">RC DRIVE</span>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <ScrollToSection sectionId="about">
                A propos
              </ScrollToSection>
            </li>
            <li className="nav-item">
              <ScrollToSection sectionId="contact">
                Contact
              </ScrollToSection>
            </li>
            <li className="nav-item">
              <ScrollToSection sectionId="services">
                Services
              </ScrollToSection>
            </li>
          </ul>
        </div>

        <div className="contactHeader">
          <p className="mr-3">+33 6 01 02 03 04</p>
          <ScrollToSection sectionId="contact">
            <button className="btn btn-primary">Demandez votre devis</button>
          </ScrollToSection>
        </div>
      </div>
    </header>
  );
}

export default Header;