import "./App.css"
import MeusDados from "./components/atividade00/01MeusDados";
import MeusDados02 from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";

function App() {
  return (
    <div className="Atividade00">
      <h1>Questão 01</h1>
      <MeusDados></MeusDados>
      <br></br>
      <hr></hr>

      <h1>Questão 02</h1>
      <MeusDados02 
        nome="Renan Victor e Márcio Alexandre" 
        curso="Engenharia de Software" 
        universidade="UFC-Campus Quixadá">
      </MeusDados02>
      <br></br>
      <hr></hr>

      <h1>Questão 03</h1>
      <Temperatura c="40" f="212" k="300"></Temperatura>
    </div>
  );
}

export default App;
