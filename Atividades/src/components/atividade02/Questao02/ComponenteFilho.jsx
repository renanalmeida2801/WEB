import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
import { Contexto } from "./ComponenteAvo"

const ComponenteFilho = () =>{

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const {id} = useContext(Contexto)
    return(
        <div>
            <p><strong>Pokemom Filho</strong></p>
            <img src={url + (id+1) +  ".png"} width={200} alt="Pokemon"></img>
            <ComponenteNeto/>
        </div>
    )
}

export default ComponenteFilho