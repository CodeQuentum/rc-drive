import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Avis from './components/Avis';
import Service from './components/Service';
import About from './components/About'

function App() {
  return (
    
    <div>
      <Header />
      <section id="contact">
      <Intro />
      </section>
      <Avis />
      <section id="services">
      <Service />
      </section>
      <section id="about">
      <About />
      </section>
    </div>
  );
}

export default App;