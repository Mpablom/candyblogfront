import Navbar from "../components/NavBar";
import WorkGallery from "../components/WorkGallery";
import works from "../assets/works.json";
import ContactForm from "../components/ContactForm";
import { Typography } from "@mui/material";

const HomePage = () => {
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
      <section id="home-section">
        <Typography variant="h1" gutterBottom sx={{ mb: 4, fontSize: "9em", fontFamily:"Great Vibes, cursive", fontWeight:"400", fontStyle:"normal", mt: 4 }}>Bienvenido a nuestra página</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel quisquam enim officia quidem recusandae, maiores ipsa! A corrupti adipisci distinctio esse aperiam quibusdam iusto doloribus asperiores architecto, voluptate fuga.
          Ducimus neque unde explicabo harum quibusdam eveniet quod asperiores, obcaecati modi veritatis officiis. Nihil nam minima nostrum cupiditate maiores cumque. Tempore quisquam possimus saepe quia laudantium consequuntur totam qui eum?
          Minus culpa quibusdam, quo quidem suscipit cumque asperiores sit ratione voluptas dolores? Exercitationem, aliquid? Nisi sequi, fuga cumque totam non a, sed facere dolore eveniet sunt dignissimos, ratione explicabo necessitatibus?
          Aut magnam iste reiciendis dignissimos ea vitae corrupti, veniam asperiores ullam tempore ex sequi, laboriosam repudiandae at? Voluptatibus consequuntur ipsa obcaecati hic laboriosam iure quibusdam officia, nesciunt aliquam, eligendi id.
          Dicta dolores nemo iure blanditiis ad qui, voluptatibus fugit? Fugit et eligendi, porro consequuntur ex assumenda, consectetur repudiandae vel dolor quia magni eveniet iure doloribus. Minima vero quas modi soluta.
          Recusandae quos maxime voluptate nulla consectetur, veniam quasi fuga facere provident fugiat est doloribus velit blanditiis dignissimos neque mollitia rerum architecto enim! Culpa accusantium animi minus natus odio architecto unde!
        </p>
      </section>

      <section id="works-section">
        <Typography variant="h4" gutterBottom sx={{ fontSize: "4em", fontFamily:"Great Vibes, cursive", fontWeight: "400", fontStyle:"normal"}}>Trabajos Realizados</Typography>
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
    </div>
  );
};

export default HomePage;
