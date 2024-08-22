import Navbar from "../components/NavBar";
import WorkGallery from "../components/WorkGallery";
import works from "../assets/works.json";
import ContactForm from "../components/ContactForm";
import { IconButton, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const HomePage = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+542645605714", "_blank");
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className="home-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <Navbar />
      <section id="home-section" style={{ marginTop: "150px" }}>
        <Typography variant="h1" gutterBottom sx={{ fontSize: "9em", fontFamily:"Great Vibes, cursive", fontWeight:"400", fontStyle:"normal", mt: 4, filter: "drop-shadow(10px 1px 1px #292828)" }}>Bienvenido a nuestra página</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel quisquam enim officia quidem recusandae, maiores ipsa! A corrupti adipisci distinctio esse aperiam quibusdam iusto doloribus asperiores architecto, voluptate fuga.
          Ducimus neque unde explicabo harum quibusdam eveniet quod asperiores, obcaecati modi veritatis officiis. Nihil nam minima nostrum cupiditate maiores cumque. Tempore quisquam possimus saepe quia laudantium consequuntur totam qui eum?
          Minus culpa quibusdam, quo quidem suscipit cumque asperiores sit ratione voluptas dolores? Exercitationem, aliquid? Nisi sequi, fuga cumque totam non a, sed facere dolore eveniet sunt dignissimos, ratione explicabo necessitatibus?
          Aut magnam iste reiciendis dignissimos ea vitae corrupti, veniam asperiores ullam tempore ex sequi, laboriosam repudiandae at? Voluptatibus consequuntur ipsa obcaecati hic laboriosam iure quibusdam officia, nesciunt aliquam, eligendi id.
          Dicta dolores nemo iure blanditiis ad qui, voluptatibus fugit? Fugit et eligendi, porro consequuntur ex assumenda, consectetur repudiandae vel dolor quia magni eveniet iure doloribus. Minima vero quas modi soluta.
          Recusandae quos maxime voluptate nulla consectetur, veniam quasi fuga facere provident fugiat est doloribus velit blanditiis dignissimos neque mollitia rerum architecto enim! Culpa accusantium animi minus natus odio architecto unde!
        </p>
      </section>

      <section id="works-section" style={{ marginTop: "60px", padding: "80px" }}>
        <Typography variant="h4" gutterBottom sx={{mb: 10, fontSize: "4em", fontFamily:"Great Vibes, cursive", fontWeight: "400", fontStyle:"normal", filter: "drop-shadow(0.5px 0.5px 0.5px #292828)"}}>Trabajos Realizados</Typography>
        <WorkGallery works={works} />
      </section>

      <section
        id="contact-section"
        style={{ width: "100%", marginTop: "60px" }}
      >
        <div
          className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ContactForm />
        </div>
      </section>
      <div style={{ position: 'fixed', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <IconButton
          color="primary"
          aria-label="WhatsApp"
          onClick={handleWhatsAppClick}
          sx={{ bgcolor: '#25D366', color: '#fff', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)', '&:hover': { bgcolor: '#128C7E' } }}
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Scroll to Top"
          onClick={handleScrollToTop}
          sx={{ bgcolor: '#000', color: '#fff', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)', '&:hover': { bgcolor: '#555' } }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HomePage;
