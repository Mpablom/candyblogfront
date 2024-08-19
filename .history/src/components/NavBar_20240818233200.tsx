import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/contactos">Contactos</Link>
        </li>
        <li>
          <Link to="/nuestros-trabajos">Nuestros Trabajos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
