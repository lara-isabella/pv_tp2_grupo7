const duplicar = (arreglo) => {
    return arreglo.map(numero => numero * 2);
}

const mostrard = (arregloOriginal) => {
    const arregloDuplicado = duplicar(arregloOriginal);
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";

    arregloDuplicado.forEach((numero) => {
        const linea = document.createElement("p");
        linea.textContent = numero;
        contenedor.appendChild(linea);
    });
}
