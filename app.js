
let oneEuroIs = {
    "JPY": 156.5, // yen
    "USD": 1.07,  // dollar
    "GBP": 0.87,  // pound
}

// Función que convierte de Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

// Función que convierte de Dólar a Yen
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

// Función que convierte de Yen a Libra
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

// Una función de ejemplo
const sum = (a,b) => {
    return a + b
}

// Exportamos todas las funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }