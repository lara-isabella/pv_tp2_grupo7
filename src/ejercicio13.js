
const mostrarArreglo = (arreglo) => {
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ""; 

    arreglo.forEach((numero) => {
        const linea = document.createElement("p");
        linea.textContent = numero;
        contenedor.appendChild(linea);
    });
}
