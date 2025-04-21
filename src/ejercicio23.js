const opcionesForm = document.getElementById("opciones-form");
const resultado = document.getElementById("resultado");

opcionesForm.addEventListener("change", (event) => {
  const lenguajeSeleccionado = event.target.value;

  resultado.textContent = `Has seleccionado: ${lenguajeSeleccionado}`;
  console.log(`Has seleccionado: ${lenguajeSeleccionado}`);
});
