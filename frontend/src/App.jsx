import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Formacao from "./sections/Formacao";
import Experiencia from "./sections/Experiencia";
import Habilidades from "./sections/Habilidades";
import Servicos from "./sections/Servicos";
import Projetos from "./sections/Projetos";
import Contato from "./sections/Contato";

function App() {
  return (
    <>
      <Hero />
      <Sobre />
      <Formacao />
      <Experiencia />
      <Habilidades />
      <Servicos />
      {/*<Projetos />*/}
      <Contato />
      <a href="#topo" className="btn-topo">
        ↑
      </a>
    </>
  );
}

export default App;
