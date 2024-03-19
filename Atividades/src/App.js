import "./AppQ1.css"
// import MeusDados from "./components/atividade00/01MeusDados";
// import MeusDados02 from "./components/atividade00/02MeusDados";
// import Temperatura from "./components/atividade00/03Temperatura";
import Pai from "./components/atividade01/questao01/01Pai";
import { PlacaMae, Memoria, PlacaDeVideo } from "./components/atividade01/02MeuPC";
import { World, Arena, Enemy, Hero } from "./components/atividade01/03Batalha";
function App() {
  return (
    <div className="Atividade01">
      <p>
        Aluno: Renan Victor de Almeida Silva - 538428  ///
        Turma 02
      </p>
      <h1>Questão 01</h1>
      <Pai></Pai> 
      <br></br>
      <h1>Questão 02</h1>
      <div className="container">
        <PlacaMae nome="Asus TUF GAMING X670E-PLUS" preco="R$ 3.500,00"/>
        <Memoria nome="LEXAR ARES, RGB, 16GB DDR4" preco="R$ 280,00"/>
        <PlacaDeVideo nome="RTX4060 8GB GDDR6" preco="R$ 2699,99"/>
      </div>
      <br></br>
      <h1>Questão 03</h1>
      <div></div>
      <World>
        <Arena>
          <Hero name="Roronoa Zoro" img="https://www.seikowatches.com/uk-en/-/media/HtmlUploader/England/Seiko/Home/special/onepiece/assets/image/co_chara_02_x15.png"/>
          <h1> VS </h1>
          <Enemy name="Zabuza Momochi" img="https://i.pinimg.com/736x/a5/bc/06/a5bc063cf14bd5171c8ddef23aef6a67.jpg"/>
        </Arena>
        <hr></hr>
        <br></br>
        <Arena>
          <Hero name="Megaman X" img="https://gameverso.com.br/wp-content/uploads/2021/03/mega-man-x_00.jpg"/>
          <h1> VS </h1>
          <Enemy name="Hisoka" img="https://criticalhits.com.br/wp-content/uploads/2020/09/Hisoka-Hunter-x-Hunter-1.jpg"/>
        </Arena>
      </World>
    </div>
  );
}

export default App;
