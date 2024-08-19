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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim expedita eaque rem adipisci veritatis nesciunt sit quaerat in, est tenetur voluptas molestiae perferendis alias earum fugit debitis. Deserunt, earum.
        Pariatur magnam quasi rem! Hic quae repudiandae dolores molestiae cupiditate commodi minus cumque praesentium, alias ipsa porro. Blanditiis a omnis, corrupti veniam maxime id fugiat iure, quo, laborum reiciendis ipsa?
        Et voluptates repellendus vel, doloremque illum praesentium obcaecati minus voluptatum rem quas. Repudiandae accusamus, facilis enim rerum totam magni doloribus cupiditate quae aspernatur adipisci velit! Repellat nulla deserunt iste placeat.
        Maxime consequuntur accusantium ab sequi numquam, at, culpa sit, ratione minima soluta placeat porro nulla. Beatae, sapiente? Fugit aliquid ducimus officia odio, cumque temporibus magni? Omnis blanditiis sint quia nesciunt.
        Eius exercitationem fugit magni ipsum voluptatum nobis modi ut vel ipsa. In ratione necessitatibus quibusdam, autem nostrum temporibus aliquam, architecto aspernatur sit provident illo, eos consequuntur nihil! Deserunt, dolores reiciendis.
        Reprehenderit voluptate nesciunt tempore sint et facere iste labore optio, praesentium, voluptas veritatis beatae tempora placeat nobis. Commodi a provident iure eveniet, quae illum modi iusto totam explicabo, incidunt quidem!
        Quaerat quod dolorem quae quidem amet vel harum eligendi ipsa ab saepe sint quo tenetur temporibus officia, doloremque, debitis blanditiis iure iste modi aliquam laboriosam accusantium ratione rem? Nihil, maxime.
        Quis quasi quos pariatur. Fugiat, sapiente illo. Porro obcaecati aliquid debitis quibusdam! Porro accusamus eius excepturi distinctio natus impedit libero voluptatum magni dolorem at. Labore libero ullam perspiciatis voluptates consequatur.
        Numquam officiis neque eaque nostrum perspiciatis aperiam et modi unde consequuntur libero eveniet dolorum accusantium exercitationem quaerat quasi commodi, labore pariatur minima ipsum dicta autem. Delectus sunt nisi veniam magni?
        Aspernatur repellendus obcaecati accusantium iste itaque ratione minima possimus consequuntur doloremque doloribus magni dolores, a libero fugiat asperiores totam recusandae ad voluptate nihil! Qui voluptates quidem, nam dolore odit asperiores.
        Quia, eos non corporis velit exercitationem harum placeat illo deserunt. Voluptate nisi error sapiente porro aliquid id facere autem, itaque, ad nihil praesentium debitis ratione, qui magni incidunt ut tenetur!
        Non laborum architecto molestias odit accusantium, accusamus nemo iste modi quidem quos dolorum officiis, incidunt quod doloremque facere alias? Dicta, doloremque praesentium magnam quisquam enim quas tempora ea animi eligendi?
        Ab corporis ex voluptates suscipit delectus maiores ut eaque eos esse recusandae porro rerum voluptatibus, explicabo, molestias ducimus aliquam sint dignissimos laborum quam veritatis. Saepe sapiente corporis rerum ex nesciunt.
        Culpa iste minus, magnam ipsam sint, nam rem at voluptate porro, quidem cupiditate dolores similique nemo repellendus enim! Impedit inventore officia nesciunt incidunt minima recusandae laudantium rem tempora, dolor saepe!
        Sed laborum ab earum accusamus, nisi sequi dolor animi quod voluptas quibusdam nostrum, expedita praesentium, voluptate a. Praesentium magni tempore quasi delectus neque iure, sed quaerat. Laboriosam, obcaecati facere! Illum.
        Laboriosam minus culpa distinctio facilis! Voluptatibus ducimus odit quos dicta corporis, sapiente esse cum cumque fugiat asperiores reprehenderit necessitatibus, odio ratione praesentium, provident sequi dolor a! Numquam vitae natus aliquid!
        Facere quis ipsum quibusdam tempora tenetur similique aperiam, sequi nostrum, quidem distinctio impedit! Expedita numquam illo eos molestias placeat sint praesentium! Dolor nobis fuga veritatis placeat atque corporis, exercitationem iusto!
        Harum, vel corrupti. Quae numquam, non, voluptatem fugit a eveniet enim ipsum autem temporibus quos, tempora natus neque assumenda incidunt velit earum architecto. Repudiandae repellat voluptate sed ad provident. Hic.
        Eaque modi quam, ullam, repudiandae, nemo asperiores error animi iste veritatis magni sit. Assumenda voluptas sed debitis consequuntur? Delectus eos deleniti alias ipsam, modi nihil quod soluta suscipit cum ipsa.
        Odit inventore cum iusto eum quos distinctio, doloribus vitae commodi tenetur a error blanditiis unde tempore, repudiandae incidunt voluptatum illum harum veniam! Veritatis dolor, suscipit harum aliquid quia nemo at.</p>
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
