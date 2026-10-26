let pantalla = document.getElementById("pantalla");

function agregarCaracter(caracter) {
    if (pantalla.innerHTML === "0" && caracter !== "+" && caracter !== ")") {
        pantalla.innerHTML = caracter;
    } else {
        pantalla.innerHTML = pantalla.innerHTML + caracter;
    }
    mostrarOperacion();
}

function limpiarPantalla() {
    pantalla.innerHTML = "0";
    operacion.textContent = "";
}

function calcularResultado() {
    try {
        mostrarOperacion();
        let resultado = eval(pantalla.innerHTML);

        if (!Number.isFinite(resultado)) {
            pantalla.innerHTML = "Error";
            return;
        }

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

let operacion = document.getElementById("operacion");

function mostrarOperacion() {
    operacion.textContent = pantalla.textContent.replace(/\//g, "÷");
}