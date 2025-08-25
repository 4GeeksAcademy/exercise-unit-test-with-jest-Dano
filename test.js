test("One euro should be 1.07 dollars", function() {
    // Importo la función desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);
});

test("One dollar should be 146.26 yen", function() {
    // Importo la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1);

    // Si 1 USD = 1/1.07 euros, y 1 euro = 156.5 yenes
    // Entonces: 1 dólar → (1 / 1.07) * 156.5 ≈ 146.26
    const expected = (1 / 1.07) * 156.5;

    // Hago mi comparación
    expect(yenes).toBeCloseTo(expected);
});

test("1000 yen should be 5.56 pounds", function() {
    // Importo la función desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1000);

    // Si 1 yen = (1 / 156.5) euros, y 1 euro = 0.87 libras
    // Entonces: 1000 yen → (1000 / 156.5) * 0.87 ≈ 5.56
    const expected = (1000 / 156.5) * 0.87;

    // Hago mi comparación
    expect(pounds).toBeCloseTo(expected);
});