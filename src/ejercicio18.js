export function cambiarTexto() {
    const parrafo = document.getElementById("texto");
    parrafo.textContent = "¡El boton funciona!";
}

const boton = document.getElementById("boton");
boton.addEventListener("click", cambiarTexto);
