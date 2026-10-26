let pantalla = document.getElementById("pantalla");
let operacion = document.getElementById("operacion");

function agregarCaracter(caracter) {
    let texto = pantalla.innerHTML;
    let ultimo = texto.slice(-1);
    let esOperador = "+-*/".includes(caracter);
    let ultimoEsOperador = "+-*/".includes(ultimo);

    if (texto === "Error") {
        texto = "0";
        ultimo = "0";
    }

    if (texto === "0" && !esOperador && caracter !== ")") {
        pantalla.innerHTML = caracter;
    } else if (esOperador && ultimoEsOperador) {
        pantalla.innerHTML = texto.slice(0, -1) + caracter;
    } else {
        pantalla.innerHTML = texto + caracter;
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

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function mostrarOperacion() {
    operacion.textContent = pantalla.textContent.replace(/\//g, "÷");
}