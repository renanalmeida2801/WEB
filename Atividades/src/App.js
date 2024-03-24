// import "./AppQ1.css"
// import MeusDados from "./components/atividade00/01MeusDados";
// import MeusDados02 from "./components/atividade00/02MeusDados";
// import Temperatura from "./components/atividade00/03Temperatura";
// import Pai from "./components/atividade01/questao01/01Pai";
// import { PlacaMae, Memoria, PlacaDeVideo } from "./components/atividade01/02MeuPC";
// import { World, Arena, Enemy, Hero } from "./components/atividade01/03Batalha";
import ClassA from "./components/atividade02/Questao01/ClassContext";
import FunctionContextA from "./components/atividade02/Questao01/FunctionContextA";
import ComponenteAvo from "./components/atividade02/Questao02/ComponenteAvo";

function App() {
  return (
    <div className="Atividade01" >
      
        <h2>Aluno: Renan Victor</h2>
        <h2>Matrícula: 538428</h2>
        <hr></hr>
     
      <h1>Questao 01</h1>
      <ClassA />
      <FunctionContextA /><hr></hr>
      <h1>Questao 02 & 03</h1>
      <ComponenteAvo/><hr></hr>
    </div>
  );
}

export default App;
