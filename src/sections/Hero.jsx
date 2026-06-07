import perfil from "../assets/perfil.jpeg";

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero-container">
        <p className="hero-tag">PORTFÓLIO PROFISSIONAL</p>

        <div className="hero-avatar">
          <img src={perfil} alt="Antônia Jamilly" />
        </div>

        <h1 className="hero-title">
          Antônia Jamilly
          <br />
          Ferreira
        </h1>

        <p className="hero-subtitle">
          Historiadora • Pesquisadora • Professora • Consultora Educacional •
          Tutora
        </p>

        <div className="hero-skills">
          <span>Ensino de História</span>
          <span>Políticas Educacionais</span>
          <span>ERER</span>
          <span>Formação Docente</span>
          <span>Tutoria EAD</span>
          <span>Consultoria Pedagógica</span>
          <span>Pesquisa Acadêmica</span>
        </div>

        <div className="hero-actions">
          <a href="#contato" className="btn-contato">
            Entrar em contato
          </a>
        </div>

        <div className="hero-scroll">↓ ROLE PARA EXPLORAR</div>
      </div>
    </section>
  );
}

export default Hero;
