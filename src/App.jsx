import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { activeThemeConfig } from './theme/themeConfig.js';

import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Concept from './components/Concept.jsx';
import Menu from './components/Menu.jsx';
import Events from './components/Events.jsx';
import Reservation from './components/Reservation.jsx';
import InfoAndMap from './components/InfoAndMap.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [selectedEventForReserve, setSelectedEventForReserve] = useState(null);
  
  // Hatanın çözümü: activeTheme değişkenini burada tanımlıyoruz
  const activeTheme = activeThemeConfig; 
  const location = useLocation();

  const handleSelectEvent = (eventTitle, eventDate) => {
    setSelectedEventForReserve({ title: eventTitle, date: eventDate });
  };

  const handleClearEvent = () => {
    setSelectedEventForReserve(null);
  };

  return (
    <div className={`min-h-screen ${activeTheme.bgClass} relative selection:bg-white selection:text-black overflow-x-hidden ${activeTheme.fontStyle} transition-colors duration-700`}>
      <ScrollToTop />
      
      {/* BELİRGENLEŞTİRİLMİŞ ARKAPLAN VE ATMOSFER */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div 
          className="w-full h-full bg-cover bg-center filter brightness-[0.45] saturate-85 transition-all duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url('${activeTheme.heroBgImage}')`,
            backgroundAttachment: 'fixed'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      </div>

      {/* HEADER / NAVBAR */}
      <Navbar activeTheme={activeTheme} />

      {/* SAYFA GEÇİŞ ANİMASYONU & ROTALAR */}
      <main className="relative z-10 flex flex-col pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HeroSection activeTheme={activeTheme} />} />
              <Route path="/about" element={<Concept activeTheme={activeTheme} />} />
              <Route path="/menu" element={<Menu activeTheme={activeTheme} />} />
              <Route path="/events" element={<Events activeTheme={activeTheme} onSelectEvent={handleSelectEvent} />} />
              <Route 
                path="/reservation" 
                element={
                  <Reservation 
                    activeTheme={activeTheme}
                    selectedEvent={selectedEventForReserve} 
                    onClearEvent={handleClearEvent} 
                  />
                } 
              />
              <Route path="/contact" element={<InfoAndMap activeTheme={activeTheme} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 py-10 text-center text-xs opacity-60 border-t border-white/10 tracking-wider bg-black/80 backdrop-blur-md">
        © 2026 {activeTheme.name}. Experience curated for nightlife connoisseurs.
      </footer>
    </div>
  );
}