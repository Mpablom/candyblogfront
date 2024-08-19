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
    <Box sx={{ boxShadow: 0.02, width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "#f2dddc" }}>
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
