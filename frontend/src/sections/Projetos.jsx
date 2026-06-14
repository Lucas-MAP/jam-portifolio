export default function Projetos() {
  const projetos = [
    {
      titulo: "Livro Didático",
      descricao:
        "Produção de material didático voltado ao ensino de História e práticas educacionais."
    },
    {
      titulo: "Projeto Escolar",
      descricao:
        "Desenvolvimento de ações pedagógicas e projetos interdisciplinares na educação básica."
    },
    {
      titulo: "Pesquisa Acadêmica",
      descricao:
        "Participação em pesquisas científicas com foco em educação, cultura e história."
    }
  ];

  return (
    <section className="projetos">
      <div className="container">
        <span className="section-tag">
          PRODUÇÕES ACADÊMICAS
        </span>

        <h2 className="section-title">
          Projetos e Produções
        </h2>

        <div className="line"></div>

        <div className="projetos-grid">
          {projetos.map((projeto) => (
            <div className="projeto-card" key={projeto.titulo}>
              <div className="projeto-placeholder">
                Em breve
              </div>

              <h3>{projeto.titulo}</h3>

              <p>{projeto.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}