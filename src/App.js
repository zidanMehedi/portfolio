import React from 'react';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import { Switch, Route } from 'react-router-dom';

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
