import { useContext } from "react"
import { Contexto } from "./ComponenteAvo"

const Decrementar = () =>{

    const {id} = useContext(Contexto)
    const {setId} = useContext(Contexto)
    return(
        <div>
            <button onClick={()=>{
                if(id - 1 < 1) return
                setId(valor => valor-1)}}>Decrementar</button>
        </div>
    )
}

export default Decrementar