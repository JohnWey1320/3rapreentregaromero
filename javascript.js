let operaciones = [];

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Syntax Error";
    }
}

function calcularOperacion(event) {
    event.preventDefault();


    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;


    let resultado;
    switch (operacion) {
        case "suma":
            resultado = suma(numero1, numero2);
            break;
        case "resta":
            resultado = resta(numero1, numero2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(numero1, numero2);
            break;
        case "division":
            resultado = division(numero1, numero2);
            break;
    }


    const operacionObjeto = {
        operacion: operacion,
        numero1: numero1,
        numero2: numero2,
        resultado: resultado
    };


    operaciones.push(operacionObjeto);


    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;


    guardarOperacionesEnLocalStorage();


    document.getElementById("numero1").value = '';
    document.getElementById("numero2").value = '';
}


function guardarOperacionesEnLocalStorage() {
    localStorage.setItem("operaciones", JSON.stringify(operaciones));
}

function cargarOperacionesDesdeLocalStorage() {
    const operacionesGuardadas = localStorage.getItem("operaciones");
    if (operacionesGuardadas) {
        operaciones = JSON.parse(operacionesGuardadas);
    }
}

function borrarStorage() {
    localStorage.removeItem("operaciones");
    operaciones = [];
    document.getElementById("resultado").innerText = '';
}

document.getElementById("calculadora").addEventListener("submit", calcularOperacion);

document.getElementById("borrarStorage").addEventListener("click", borrarStorage);

cargarOperacionesDesdeLocalStorage();