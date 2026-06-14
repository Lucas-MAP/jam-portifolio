export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <span className="section-tag">VAMOS CONVERSAR</span>

        <h2 className="section-title">Contato</h2>

        <div className="line"></div>

        <div className="contato-card">
          <h3>Disponível para novos projetos</h3>

          <p>
            Atendo de forma remota em consultorias, tutorias,
            formações, pesquisas e parcerias acadêmicas em todo o Brasil.
          </p>

          <div className="contato-buttons">
            <a
              href="mailto:antoniajamillyferreira@gmail.com"
              className="btn-email"
            >
              E-mail
            </a>

            <a
              href="https://wa.me/5563991338526"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp
            </a>

            <a
              href="http://lattes.cnpq.br/0122528267813085"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lattes"
            >
              Currículo Lattes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}