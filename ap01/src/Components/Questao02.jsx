import { useState } from "react"

function Questao02(){
    
    // seta a imagem padrao do pokemon
    const[pokemon, setPokemon] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png")
    
    // seta uma variavel "deCostas" que servira para saber se o pokemon esta de costas ou nao
    const[deCostas, setCostas] = useState(false)

    // verifica se o pokemon esta de costas ou de frente e seta a imagem de acodo com o resultado encontrado
    function virarPokemom(){
        // caso deCostas == false, então o pokemon esta de frente e irá virar de costas
        if(!deCostas) {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/260.png")
        // caso deCostas == true, então o pokemon esta de costas e irá virar de frente
        } else { 
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png")
        }
        setCostas(!deCostas) // altera o estado da variavel 
    }

    return(
        <div>
            <h1>Questao 02</h1>
            <h3>Swampert</h3>
            <img  alt="pokemon" src={pokemon} width={200}></img>
            <button onClick={virarPokemom}>Virar pokemon!</button>
            <hr/>
        </div>
    )
}

export default Questao02