import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScrollToWorks = () => {
    document.getElementById("works-section")?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false); // Cierra el menú después de hacer clic
  };

  const handleScrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    setIsDrawerOpen(false); // Cierra el menú después de hacer clic
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "secondary.main",
        color: "white",
        transition: "all 1.1s ease-in-out",
        height: isScrolled ? "60px" : "150px",
        top: 0, 
        width: "100%", 
        zIndex: 1100, 
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "100%" }}>
        <div className="logo-container">
          <img
            src="../assets/logo-sbg.png"
            alt="logo"
            className="logo"
            style={{
              height: isScrolled ? "20px" : "150px",
              transition: "height 1.1s ease-in-out",
              filter: "drop-shadow(1px 1px 2px #292828)",
            }}
          />
        </div>
        <div className="btn-container" style={{ display: "flex", alignItems: "center" }}>
          {/* Menu Hamburguesa */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* Botones de Navegación para pantallas grandes */}
          <div style={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit" onClick={handleScrollToContact} className="btn-nav">
              Contactos
            </Button>
            <Button color="inherit" onClick={handleScrollToWorks} className="btn-nav">
              Nuestros Trabajos
            </Button>
          </div>
        </div>
      </Toolbar>

      {/* Drawer para el menu lateral */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <div
          style={{
            width: "250px",
            padding: "16px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          <ListItem button onClick={handleScrollToContact}>
            <ListItemText primary="Contactos" />
          </ListItem>
          <ListItem button onClick={handleScrollToWorks}>
            <ListItemText primary="Nuestros Trabajos" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
