import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Avis from './components/Avis';
import Service from './components/Service';
import About from './components/About'
import CTA from './components/CTA';
import Flotte from './components/Flotte';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    
    <div>
      <Header />
      <Intro />
      <Avis />
      <section id="services">
      <Service />
      </section>
      <section id="about">
      <About />
      </section>
      <Flotte />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;