const Q03 = () => {
    
    const celso = 10;
    const faren = 10;
    const karen = 10;

    function CelsiusParaFahrenheit(c){
        return (c*1.8) + 32
    }

    function FahrenheitParaCelsius(f){
        return (f-32) * 5/9
    }

    function KelvinConversao(k){
        let c = k-273
        let f = (k-273)*9/5 + 32
        return {c, f}
    }
    
    return(
        <div>
            <h2>{celso} Celsius para Fahrenheit: {CelsiusParaFahrenheit(celso)} </h2>
            <h2>{faren}Fahrenheit para Celsius: {FahrenheitParaCelsius(faren).toFixed(2)} </h2>
            <h2>{karen} Kelvin:{KelvinConversao(karen).c} e {KelvinConversao(karen).f}</h2>
            <hr/>
        </div>
    )
}

export default Q03