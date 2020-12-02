import React from 'react';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';

function App() {
  
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Skills/>
    </>
  );
}

export default App;
