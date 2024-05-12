import React from 'react';
import ScrollToSection from './ScrollToSection';
import '../style/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import brandLogo from '../assets/logo/blackLogo.jpg';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={brandLogo} alt="Logo de RC Drive" className="mr-2" width="150" height="100" />
        </a>

        <div className="navbar-nav ml-auto" id="navigation">
          <ul className="navbar-nav">
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
            <li className="nav-item">
              <ScrollToSection sectionId="about">
                A propos
              </ScrollToSection>
            </li>
          </ul>
          <div className='contactHeader'>
          <p className="mr-3">+33 602685014</p>
          <ScrollToSection sectionId="contact">
            <button className="btn btn-primary">Demandez votre devis</button>
          </ScrollToSection>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;