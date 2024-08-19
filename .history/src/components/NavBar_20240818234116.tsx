import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
  const handleScrollToWorks = () => {
    document.getElementById('works-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={handleScrollToContact}>
          Contactos
        </Button>
        <Button color="inherit" onClick={handleScrollToWorks}>
          Nuestros Trabajos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
