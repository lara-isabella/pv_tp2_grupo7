export function actualizarTexto(valor, salida) {
    salida.textContent = valor;
    salida.style.backgroundColor = valor.length > 20 ? "#ddbcf7" : "transparent";
  }
  