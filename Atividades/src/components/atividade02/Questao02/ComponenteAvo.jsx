import ComponenteFilho from "./ComponenteFilho"
import { createContext, useContext, useState } from "react"
import Incrementar from "./Incrementar"
import Decrementar from "./Decrementar"
export const Contexto = createContext(1)

const ComponenteAvo = () =>{

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [id, setId] = useState(1)
    return(
        <div>
            <Contexto.Provider value={{id, setId}}>
                <p><strong>Pokemon Avô</strong></p>
                <img src={url + id + ".png"} alt="Pokemon" width={200} ></img>
                <ComponenteFilho/>
                <Decrementar/>
                <Incrementar/>
            </Contexto.Provider>
        </div>
    )
}

export default ComponenteAvo

