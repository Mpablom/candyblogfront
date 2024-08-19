import React from 'react';
import Navbar from './NavBar';
import WorkGallery from '../components/WorkGallery';
import works from '../assets/works.json';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido a Nuestra Página</h1>
      <WorkGallery works={works} />
    </div>
  );
};

export default HomePage;
