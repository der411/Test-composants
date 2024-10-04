import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Features from './pages/Features';
import Marketplace from './pages/Marketplace';
import Company from './pages/Company';
import Analytics from './pages/Analytics';
import Engagement from './pages/Engagement';
import Security from './pages/Security';
import Integrations from './pages/Integrations';
import Automations from './pages/Automations';
import Demo from './pages/Demo';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/company" element={<Company />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/security" element={<Security />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;