import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScrollToWorks = () => {
    document.getElementById("works-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDrawer = (open: boolean | ((prevState: boolean) => boolean)) => () => {
    setIsDrawerOpen(open);
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
            style={{ height: isScrolled ? "100px" : "200px", transition: "height 1.1s ease-in-out", filter: "drop-shadow(0px 0px 1px #292828)" }}
          />
        </div>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" onClick={handleScrollToContact} className="btn-nav">
            Contactos
          </Button>
          <Button color="inherit" onClick={handleScrollToWorks} className="btn-nav">
            Nuestros Trabajos
          </Button>
        </Box>

        {/* Menú Hamburguesa para pantallas pequeñas */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button onClick={handleScrollToContact}>
                <ListItemText primary="Contactos" />
              </ListItem>
              <ListItem button onClick={handleScrollToWorks}>
                <ListItemText primary="Nuestros Trabajos" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
