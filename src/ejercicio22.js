import { actualizarTexto } from "./funciones-ej22.js";

const input = document.getElementById("entradaTexto");
const salida = document.getElementById("textoMostrado");

input.addEventListener("input", (e) => {
  actualizarTexto(e.target.value, salida);
});

