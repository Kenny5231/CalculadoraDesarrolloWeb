let pantalla = document.getElementById("pantalla");

function agregarCaracter(caracter) {
    if (pantalla.innerHTML === "0" && caracter !== "+" && caracter !== ")") {
        pantalla.innerHTML = caracter;
    } else {
        pantalla.innerHTML = pantalla.innerHTML + caracter;
    }
}

function limpiarPantalla() {
    pantalla.innerHTML = "0";
}

function calcularResultado() {
    try {
        let resultado = eval(pantalla.innerHTML);
        pantalla.innerHTML = resultado;
    } catch (error) {
        pantalla.innerHTML = "Error";
    }
}

function dividir(numero1, numero2) {
    if (numero2 === 0) {
        return "SYNTAX ERROR";
    }
    return numero1 / numero2;
}