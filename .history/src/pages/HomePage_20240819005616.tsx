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
        <p style={{textAlign: 'center', paddingLeft: '20px', paddingRight: '20px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nemo culpa optio fugit velit, consequuntur animi numquam inventore minus molestiae, modi quia aut hic accusamus voluptates ratione dicta illum distinctio?
        Error a deserunt porro distinctio accusantium perferendis dolor enim suscipit nobis officia, cum laudantium illo hic, adipisci quaerat iure dolorum asperiores. Animi tempora adipisci eos sint iste, ullam facere enim?
        Blanditiis excepturi accusamus esse libero accusantium quis porro ipsum consequuntur, odit, rem magni omnis distinctio alias quibusdam consequatur sit nobis quo, repellat eligendi eos cumque? Numquam nisi obcaecati omnis beatae?
        Facilis repudiandae quis beatae, voluptatem voluptates rerum temporibus deleniti nihil. Quae mollitia a accusamus optio modi dicta quod impedit debitis tempora voluptas? Temporibus libero quos possimus sunt. Nesciunt, tempore nam!
        Mollitia exercitationem, doloribus ipsam rerum totam repellat vitae fugiat accusantium sapiente blanditiis? Quo placeat aliquam odit soluta numquam dicta quia adipisci molestiae, quidem deserunt, alias neque fuga, voluptatibus dolorem ratione!
        Voluptas blanditiis, id molestiae magnam autem qui est aperiam repellat soluta tenetur quam esse a dolores commodi laudantium consequatur cumque. Dolore ratione cumque sapiente culpa tenetur minima odit quam doloremque?
        Tenetur voluptatum atque molestiae dicta. Vitae iusto deleniti vel necessitatibus nemo quibusdam amet corporis nam provident, voluptatibus nostrum consequuntur voluptas quia est repellendus sed? Non beatae incidunt totam consectetur excepturi.
        Aut, magnam labore corrupti beatae inventore officiis sequi culpa ipsum nihil explicabo eos voluptate nesciunt qui sit! Deleniti veritatis aut corrupti hic ducimus praesentium inventore ab atque aliquid accusantium. Debitis?
        Nesciunt esse, quasi eligendi possimus architecto aut nihil unde ipsum, quaerat laborum veniam molestias, modi quod similique. Eveniet earum laborum tenetur? Itaque quisquam provident velit. Deserunt accusamus facere blanditiis architecto.
        Culpa autem aspernatur, quis, minus nobis illum vel libero vitae aut porro, ipsa a quia dolores veniam beatae dignissimos quisquam corporis laudantium iste eos sed neque velit. Asperiores, omnis commodi!</p>
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
