import { useContext } from "react"
import { Contexto } from "./ComponenteAvo"

const ComponenteNeto = () =>{

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const {id} = useContext(Contexto)

    return(
        <div>
            <p><strong>Pokemon Neto</strong></p>
            <img src={url + (id+2) + ".png"} width={200}alt="Pokemon"></img>
        </div>
    )
}

export default ComponenteNeto