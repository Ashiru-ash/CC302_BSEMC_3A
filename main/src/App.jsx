import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Activity1 from './pages/activity1/Activity1';
import Activity2 from './pages/activity2/Activity2';
import Activity3 from './pages/activity3/activity3';
import './App.css';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
              </>
            } />
            <Route path="/activity1" element={<Activity1 />} />
            <Route path="/activity2" element={<Activity2 />} />
            <Route path="/activity3" element={<Activity3 />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;