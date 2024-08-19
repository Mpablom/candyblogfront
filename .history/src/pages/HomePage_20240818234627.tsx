import Navbar from "../components/NavBar";
import WorkGallery from "../components/WorkGallery";
import works from "../assets/works.json";

const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <section id="home-section">
        <h1>Bienvenido a Nuestra Página</h1>
        <p>Descripción o contenido de la página principal.</p>
      </section>

      <section id="works-section">
        <h2 style={{ textAlign: "center" }}>Trabajos Realizados</h2>
        <WorkGallery works={works} />
      </section>

      <section id="contact-section">
        <h2>Contacto</h2>
        <p>Formulario de contacto y redes sociales.</p>
        {/* Aquí puedes incluir el formulario de contacto */}
      </section>
    </div>
  );
};

export default HomePage;
