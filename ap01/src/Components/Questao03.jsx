import { useState } from "react"

function Questao03() {
    // Utilizando useState para definir os estados que armazenarão o nome e a população mínima e máxima
    const [nomeMin, setNomeMin] = useState("")
    const [nomeMax, setNomeMax] = useState("")
    const [minimo, setMinimo] = useState(0)
    const [maximo, setMaximo] = useState(0)

    async function fetchCapitals() {
        try {
            // Fazendo a requisição para a API RESTCountries para obter as capitais e populações dos países na Europa
            const resposta = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
            const data = await resposta.json()

            if (data.length > 0) {
                let populacaoMin = data[0]
                let populacaoMax = data[0]

                data.forEach(country => {
                    // Se a população do país atual for menor que a armazenada, atualiza os estados com os valores correspondentes
                    if (country.population < populacaoMin.population) {
                        populacaoMin = country
                        setMinimo(populacaoMin.population)
                        setNomeMin(populacaoMin.capital)
                    }
                    // Se a população do país atual for maior que a armazenada, atualiza os estados com os valores correspondentes
                    if (country.population > populacaoMax.population) {
                        populacaoMax = country
                        setMaximo(populacaoMax.population)
                        setNomeMax(populacaoMax.capital)
                    }
                });

            } else {
                console.log("Nenhum país encontrado.")
            }
        } catch (error) {
            console.log("Erro: " + error)
        }
    }
    // Chama a função fetchCapitals() para buscar os dados assim que o componente for montado
    fetchCapitals()


    return (
        <div>
            <h1>Questao 03</h1>
            <h3>A Capital {nomeMin} tem a menor população com: {minimo} habitantes</h3>
            <h3>Capital {nomeMax} tem a maior população com: {maximo} habitantes</h3>
            <hr />
        </div>
    )
}

export default Questao03