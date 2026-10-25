let pantalla = document.getElementById("pantalla");

let numeroAnterior = ""; 
function agregarNumero(numero) {
    if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = numero;
    } else {
        pantalla.innerHTML = pantalla.innerHTML + numero;
    }
}
function prepararSuma() {
    numeroAnterior = pantalla.innerHTML; 
    pantalla.innerHTML = "0"; 
}

function calcularResultado() {
    let numeroActual = pantalla.innerHTML;
    
    let resultado = parseFloat(numeroAnterior) + parseFloat(numeroActual);

    pantalla.innerHTML = resultado;
}