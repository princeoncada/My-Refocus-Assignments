function convertCelsiusToKelvin(tempCelsius) {
    return tempCelsius + 273.15
}

function convertFahrenheitToKelvin(tempFahrenheit) {
    return (tempFahrenheit - 32)/1.8 + 273.15
}

let bodyTempInCelsius = 37
let bodyTempInFahrenheit = 98.6

console.log(convertCelsiusToKelvin(bodyTempInCelsius))
console.log(convertFahrenheitToKelvin(bodyTempInFahrenheit))

