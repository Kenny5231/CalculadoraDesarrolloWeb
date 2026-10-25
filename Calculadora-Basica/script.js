function agregarNumero(numero) {
    
    let pantalla = document.getElementById("pantalla");
    
    if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = numero;
    } 
    else {
        pantalla.innerHTML = pantalla.innerHTML + numero;
    }
}