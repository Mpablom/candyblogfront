import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import ContactForm from './ContactForm';
import Works from './Works';

const HomePage = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contactos" element={<ContactForm />} />
        <Route path="/nuestros-trabajos" element={<Works />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
