import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button} from "@mui/material";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToWorks = () => {
    document.getElementById("works-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
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
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "100%"}}>
        <div className="logo-container">
          <img
            src="../assets/logo-sbg.png"
            alt="logo"
            className="logo"
            style={{ height: isScrolled ? "20px" : "150px", transition: "height 2s ease-in-out" }}
          />
        </div>
        <div className="btn-container">
          <Button color="inherit" onClick={handleScrollToContact} className="btn-nav">
            Contactos
          </Button>
          <Button color="inherit" onClick={handleScrollToWorks} className="btn-nav">
            Nuestros Trabajos
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
