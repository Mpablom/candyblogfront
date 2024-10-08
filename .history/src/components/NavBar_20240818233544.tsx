import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/contact">
          Contactos
        </Button>
        <Button color="inherit" component={Link} to="/works">
          Nuestros Trabajos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;