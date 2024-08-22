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
        <Typography variant="h1" gutterBottom sx={{ fontSize: "9em", fontFamily:"Great Vibes, cursive", fontWeight:"400", fontStyle:"normal", mt: 4 }}>Bienvenido a nuestra página</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus sapiente debitis sint cupiditate quae voluptates quidem, beatae, cumque, eum ad vel nesciunt iste earum doloremque sit soluta. Dicta, excepturi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem recusandae, iusto veritatis sit quos neque molestiae odit tenetur blanditiis eius laborum iure culpa debitis dolore, quas sapiente excepturi temporibus.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quas non doloremque asperiores totam dicta similique sunt nam velit illo veniam cum nobis, laborum quae vero pariatur in repudiandae laudantium?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem culpa provident voluptatem tempore doloremque minus laudantium unde dolore labore, similique ipsam distinctio aspernatur eum reiciendis hic natus possimus molestiae tenetur.
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
