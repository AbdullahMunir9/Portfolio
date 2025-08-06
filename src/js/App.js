import React, { useEffect, Suspense } from 'react';
import Lenis from '@studio-freight/lenis';

import '../css/App.css';
import '../css/Home.css';
import '../css/About.css';
import '../css/portfolioshowcase.css';
import Home from './Home';

// Lazy loaded components
const NavBar = React.lazy(() => import('./NavBar'));
const About = React.lazy(() => import('./About'));
const PortfolioShowcase = React.lazy(() => import('./PortfolioShowcase-Container'));
const Contact = React.lazy(() => import('./Contact'));
const Footer = React.lazy(() => import('./Footer'));
const SplashCursor = React.lazy(() => import('../blocks/Animations/SplashCursor/SplashCursor'));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    
      <>
        <SplashCursor />
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
        </Suspense>
        <div className="Main-Body-Container">
          <Home />
          <About />
          <PortfolioShowcase />
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </div>
        <Footer />
      </>
  );
}

export default App;
