const retornarMes = (numero) => {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    if (numero >= 1 && numero <= 12) {
        return meses[numero - 1];
    } else {
        return "No es un mes válido";
    }
};

function mostrarMes() {
    const numero = parseInt(document.getElementById("numeroMes").value);  // Convertir a número entero
    const resultado = retornarMes(numero);
    document.getElementById("resultado").textContent = resultado;  // Mostrar el mes en el <p>
}
