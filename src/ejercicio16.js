const sumarRango = (inicio, fin) => {
    if (inicio > fin) {
        return "El número inicial debe ser menor o igual al final.";
    }

    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
}

const mostrarSuma = () => {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fin = parseInt(document.getElementById("final").value);

    const resultado = sumarRango(inicio, fin);
    document.getElementById("resultado").textContent = `La suma del rango es: ${resultado}`;
}
