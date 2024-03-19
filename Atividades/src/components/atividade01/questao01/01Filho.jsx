const Filho = ({altura, peso}) =>{

    function calcularImc({altura}, {peso}){
        let imc = peso / (altura*altura)
        return  imc.toFixed(2)
    }

    function imc(imc){
        if(imc < 18){
            return <h3 className="pesoabaixo">Abaixo do peso</h3>
        } else if(imc > 25){
            return <h3 className="pesoacima">Acima do peso</h3>
        } else return <h3 className="peso">Peso ideal</h3>
    }

    return(
        <div>
            <h3>Altura: {altura} </h3>
            <h3>Peso: {peso}</h3>
            <h3>IMC: {calcularImc({altura}, {peso})}</h3>
            {imc(calcularImc({altura}, {peso}))}
        </div>
    )

}

export default Filho