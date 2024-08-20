import { useEffect, useState } from "react"

const Questao01A = () => {

    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ]

    return (
        <div>
            <h1>Questao 01</h1>
            {/* passando lista para Questao01B via props  */}
            <Questao01B lista={lista} />
            <hr />
        </div>

    )
}

function Questao01B({ lista }) {

    //: Definir o estado inicial como um array vazio
    const [maioresValores, setMaiores] = useState([])

    // useEffect compara os valores de cada obj da lista e retornar o maior usando a funcao Mathx.max
    useEffect(() => {
        const maiores = lista.map(obj => Math.max(...Object.values(obj)))
        setMaiores(maiores)
    }, [lista]) //lista fica como dependência, pois caso seja alterado o useEffect volta a executar

    return (
        <div>
            <ul>
                {/* percorre os maiores valores ja encontrados e cria um item de lista com cada maior de cada objeto */}
                {maioresValores.map((valor, index) => (
                    <li key={index}>Maior valor da lista {index + 1}: {valor}</li>
                ))}
            </ul>
        </div>
    )
}

export default Questao01A