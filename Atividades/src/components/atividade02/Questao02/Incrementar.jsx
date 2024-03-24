import { useContext } from "react"
import { Contexto } from "./ComponenteAvo"

const Incrementar = () =>{

    const {id} = useContext(Contexto)
    const {setId} = useContext(Contexto)

    return(
        <div>
            <button onClick={()=>{
                if(id + 1 > 1025) return
                setId(valor => valor+1)}}>Incrementar</button>
        </div>
    )
}

export default Incrementar