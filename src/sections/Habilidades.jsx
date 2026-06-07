export default function Habilidades() {
  const habilidades = [
    "Legislação Educacional",
    "Material Didático",
    "BNCC",
    "ABNT",
    "Gestão de Sala de Aula",
    "Coordenação de Projetos",
    "Moodle",
    "Google Classroom",
    "Google Meet",
    "Microsoft Teams",
    "Canva",
    "Pesquisa Científica",
    "Redação Acadêmica",
    "Orientação de Pesquisas",
    "IA Aplicada à Educação"
  ];

  return (
    <section className="habilidades">
      <div className="container">
        <span className="section-tag">COMPETÊNCIAS</span>

        <h2 className="section-title">
          Habilidades
        </h2>

        <div className="line"></div>

        <div className="skills-container">
          {habilidades.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}