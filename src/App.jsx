// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MobileNavbar from './components/Header/MobileNavbar';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, footer');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <div className="content">
        <WelcomeSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
      <MobileNavbar activeSection={activeSection} />
    </div>
  );
}

export default App;
