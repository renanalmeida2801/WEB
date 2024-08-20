import { useState, useEffect } from "react";

function Questao04() {
    // Definindo os estados para armazenar as capitais e populações
    const [nomeMin, setNomeMin] = useState("");
    const [nomeMax, setNomeMax] = useState("");
    const [minimo, setMinimo] = useState(0);
    const [maximo, setMaximo] = useState(0);

    // Função que retorna uma promessa simulando a requisição da API
    function PopulacaoCapitais() {
        return new Promise((resolve) => {
            const data = [
                {"capital": ["Dublin"], "population": 49947241},
                {"capital": ["Nicosia"], "population": 1207361},
                {"capital": ["Madrid"], "population": 47351567}
            ];
            resolve(data);
        });
    }

    // useEffect para executar a busca dos dados quando o componente for montado
    useEffect(() => {
        PopulacaoCapitais().then((data) => {
            if (data.length > 0) {
                let populacaoMin = data[0];
                let populacaoMax = data[0];

                // Iterando sobre os dados para encontrar as capitais com menor e maior população
                data.forEach(country => {
                    if (country.population < populacaoMin.population) {
                        populacaoMin = country;
                        setMinimo(populacaoMin.population);
                        setNomeMin(populacaoMin.capital[0]); // Assume que cada objeto tem um array "capital" com ao menos um item
                    }
                    if (country.population > populacaoMax.population) {
                        populacaoMax = country;
                        setMaximo(populacaoMax.population);
                        setNomeMax(populacaoMax.capital[0]); // Assume que cada objeto tem um array "capital" com ao menos um item
                    }
                });

            } else {
                console.log("Nenhum país encontrado.");
            }
        }).catch(error => {
            console.log("Erro: " + error);
        });
    }, []); // O array vazio [] garante que o efeito seja executado apenas na montagem do componente

    return (
        <div>
            <h1>Questao 03</h1>
            <h3>A Capital {nomeMin} tem a menor população com: {minimo} habitantes</h3>
            <h3>Capital {nomeMax} tem a maior população com: {maximo} habitantes</h3>
        </div>
    );
}

export default Questao04;
