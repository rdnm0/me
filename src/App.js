import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Quote from './components/Quote';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Quote />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
