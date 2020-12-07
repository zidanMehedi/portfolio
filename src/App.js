import React, { useState } from 'react';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Reset from './Reset';
import loader from './Images/loader2.gif';

function App() {

  const [one, setOne] = useState(cal2);

  function cal() {
    setTimeout(() => {
      setOne(
        <>
          <Reset />
          <Navbar />
          <Home />
          <About />
          <Services />
          <Skills />
          <Contact />
          <Footer />
        </>
      )
    }, 5000);
  }

  function cal2() {
    return (
      <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%', background: 'RGB(2, 0 , 0)' }}>
          <img src={loader} style={{ height: '100px', width: '170px' }}></img>
        </div>
      </>
    );
  }

  cal();
  return <>{one}</>
  
}

export default App;
