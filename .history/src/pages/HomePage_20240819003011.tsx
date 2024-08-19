import Navbar from "../components/NavBar";
import WorkGallery from "../components/WorkGallery";
import works from "../assets/works.json";
import ContactForm from "../components/ContactForm";

const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow:'none' }}
    >
      <Navbar />
      <section id="home-section">
        <h1>Bienvenido a Nuestra Página</h1>
        <p>Descripción o contenido de la página principal.</p>
      </section>

      <section id="works-section">
        <h2>Trabajos Realizados</h2>
        <WorkGallery works={works} />
      </section>

      <section id="contact-section" style={{width: '100%', marginTop: '60px'}}>
        <div className="form" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
