import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Avis from './components/Avis';
import Service from './components/Service';

function App() {
  return (
    
    <div>
      <Header />
      <Intro />
      <Avis />
      <Service />
    </div>
  );
}

export default App;