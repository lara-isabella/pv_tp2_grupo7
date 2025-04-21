const contarLetraA = (cadena) => {
    let contador = 0;
    for (let letra of cadena.toLowerCase()) {
      if (letra === 'a') {
        contador++;
      }
    }
    return contador;
  };

  const mostrarCantidad = () => {
    const texto = document.getElementById("texto").value;
    const resultado = contarLetraA(texto);
    document.getElementById("resultado").textContent = `Cantidad de "a": ${resultado}`;
  };