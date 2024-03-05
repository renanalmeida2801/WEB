const Temperatura = ({c, f, k}) =>{
    function celsiusParaFahrenheit(c){
        let temp = c * (9/5) + 32
        return temp
    }
    function fahrenheitParaCelsius(f){
        let temp = (f-32) * (5/9)
        return temp
    }
    function kelvin(k){
        let objJSON = {celsius: k-273.15, fahrenheit: (k-273.15)*(9/5) + 32} 
        return (
            <div>
                <h2 class="h2-temp">Celsius: {objJSON.celsius.toFixed(2)}°C</h2>
                <h2 class="h2-temp">Fahrenheint: {objJSON.fahrenheit.toFixed(2)}°F</h2>
            </div>
            
        )
    }

    return(
        <div>
            <h2 class="h2-temp"> {c}°C para Fahrenheit: {celsiusParaFahrenheit(40)}°F</h2>
            <h2 class="h2-temp"> {f}°F para Celsius: {fahrenheitParaCelsius(212)}°C</h2>
            <h2 class="h2-temp"> {k}K Kelvin para:</h2>
            {kelvin(300)}
        </div>
    )
}
export default Temperatura