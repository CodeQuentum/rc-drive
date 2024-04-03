import React from 'react';
import '../style/Header.css';

const Header = () => {
  return (
    <header>
        <div className='logoNom'>
       <img src="chemin/vers/votre/image.jpg" alt="Logo du site" />
        <div><p className="companyName">RC DRIVE</p></div>
        </div>
      <nav>
        <ul>
          <li><a href="/about">A propos</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
      <div class="contactHeader">
      <p>+33 6  01 02 03 04</p>
      <p>Demandez votre devis</p>
      </div>
    </header>
  );
}

export default Header;