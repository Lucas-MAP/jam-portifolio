function Formacao() {
  const formacoes = [
    {
      periodo: "2024 - 2026",
      titulo: "Mestrado em História",
      instituicao: "Universidade Federal do Sul e Sudeste do Pará(UNIFESSPA)",
    },
    {
      periodo: "2025",
      titulo: "Especialização em Gestão Educacional",
      instituicao: "Faculdade IMES",
    },
    {
      periodo: "2025",
      titulo: "Especialização em História e Cultura Afro-Brasileira",
      instituicao: "Faculdade FACPRISMA",
    },
    {
      periodo: "2023 - 2024",
      titulo: "Especialização em Ensino de Geografia, Meio Ambiente e História",
      instituicao: "Instituto Facuminas - FACUMINAS",
    },
    {
      periodo: "2019 - 2023",
      titulo: "Licenciatura em História",
      instituicao: "Universidade Federal do Tocantins (UFT)",
    },
  ];

  return (
    <section className="formacao">
      <div className="container">

        <p className="section-tag">
          TRAJETÓRIA ACADÊMICA
        </p>

        <h2 className="section-title">
          Formação Acadêmica
        </h2>

        <div className="line"></div>

        <div className="formacao-lista">
          {formacoes.map((item, index) => (
            <div
              key={index}
              className="formacao-item"
            >
              <div className="formacao-periodo">
                {item.periodo}
              </div>

              <div className="formacao-info">
                <h3>{item.titulo}</h3>

                <p>
                  {item.instituicao}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Formacao;