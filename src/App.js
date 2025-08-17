import React, { useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
