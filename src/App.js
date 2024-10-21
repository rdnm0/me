import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Quote from './components/Quote';
import AnimatedCursor from 'react-animated-cursor'; // Import AnimatedCursor

function App() {
  return (
    <div>
      <AnimatedCursor 
        innerSize={10} // Size of the inner cursor
        outerSize={10} // Size of the outer cursor
        color='0, 191, 255' // Cursor color (RGB format)
        outerAlpha={0.1} // Outer cursor opacity
        innerScale={0.7} // Scale of the inner cursor
        outerScale={3} // Scale of the outer cursor
        trailingSpeed={6} // Speed of the trailing effect
      />
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
