export default function Servicos() {
  const servicos = [
    {
      numero: "01",
      titulo: "Consultoria Pedagógica",
      descricao:
        "Assessoria para instituições, projetos educacionais e desenvolvimento de práticas pedagógicas."
    },
    {
      numero: "02",
      titulo: "Tutoria EAD",
      descricao:
        "Mediação de cursos, acompanhamento de alunos e suporte em ambientes virtuais de aprendizagem."
    },
    {
      numero: "03",
      titulo: "Formação Docente",
      descricao:
        "Capacitação de professores e equipes educacionais para atuação em diferentes contextos."
    },
    {
      numero: "04",
      titulo: "Avaliação e Pesquisa",
      descricao:
        "Avaliação de materiais educacionais, projetos pedagógicos e pesquisas acadêmicas."
    },
    {
      numero: "05",
      titulo: "Orientação Acadêmica",
      descricao:
        "Apoio em trabalhos científicos, projetos de pesquisa e produção acadêmica."
    }
  ];

  return (
    <section className="servicos">
      <div className="container">
        <span className="section-tag">O QUE OFEREÇO</span>

        <h2 className="section-title">
          Serviços
        </h2>

        <div className="line"></div>

        <div className="servicos-grid">
          {servicos.map((servico) => (
            <div key={servico.numero} className="servico-card">
              <span className="servico-numero">
                {servico.numero}
              </span>

              <h3>{servico.titulo}</h3>

              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}