const boton = document.getElementById("cambiarColor");

const colores = [ "#f8bbd0","#9205c6", "#f9ffa0", "#b9f1eb", "#e91e63","#fdc047", ];

boton.addEventListener("click", () => {
  const color = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = color;
  console.log(`Color cambiado a: ${color}`);
});
