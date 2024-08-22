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
    <Box sx={{ boxShadow: "none", width: "100%", flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ bgcolor: "secondary.main", color: "white" }}
      >
        <Toolbar>
          <div className="logo-container">
            <img src="../assets/logo.png" alt="logo" className="logo" />
          </div>
          <div className="btn-container">
            <Button
              color="inherit"
              onClick={handleScrollToContact}
              className="btn-nav"
            >
              Contactos
            </Button>
            <Button
              color="inherit"
              onClick={handleScrollToWorks}
              className="btn-nav"
            >
              Nuestros Trabajos
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
