//Convert the Temperature from Kelvin to Celsius
function celsius() {
    //declare variable for input
    let kelvin = document.getElementById("kelvin").value;
    //Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
    let celsius = kelvin - 273;
    //print conversion
    document.getElementById("converted").innerText = celsius;
}

//Convert the Temperature from Celsius to Fahrenheit
function fahrenheit() {
    let kelvin = document.getElementById("kelvin").value;
    let celsius = kelvin - 273;
    let fahrenheit = celsius * (9 / 5) + 32;
    //round down the decimal
    fahrenheit = Math.floor(fahrenheit);
    //print conversion
    document.getElementById("converted").innerText = fahrenheit;
}

//Convert the Temperature from Fahrenheit to Newton
function newton() {
    let kelvin = document.getElementById("kelvin").value;
    let celsius = kelvin - 273;
    let newton = celsius * (33 / 100);
    //round down the decimal
    newton = Math.floor(newton);
    //print conversion
    document.getElementById("converted").innerText = newton;
}

