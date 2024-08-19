import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navbar = () => {
  const handleScrollToWorks = () => {
    document
      .getElementById("works-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ boxShadow:'none', width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent", color: "black" }}>
        <Toolbar>
          <Button color="inherit" onClick={handleScrollToContact}>
            Contactos
          </Button>
          <Button color="inherit" onClick={handleScrollToWorks}>
            Nuestros Trabajos
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
