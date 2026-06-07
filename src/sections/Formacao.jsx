function Formacao() {
  const formacoes = [
    {
      periodo: "2014 - 2016",
      titulo: "Mestrado em História",
      instituicao: "Universidade Federal de Goiás",
    },
    {
      periodo: "2012 - 2014",
      titulo: "Especialização em Gestão Educacional",
      instituicao: "Faculdade IESB",
    },
    {
      periodo: "2011 - 2012",
      titulo: "Especialização em História e Cultura Afro-Brasileira",
      instituicao: "Faculdade IESB",
    },
    {
      periodo: "2007 - 2010",
      titulo: "Licenciatura em História",
      instituicao: "Universidade Federal do Tocantins",
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