let edades = [18, 20, 17, 11, 22, 27, 19, 33];

let suma = 0;
edades.forEach(edad => suma += edad);

const promedio = suma / edades.length;

console.log("El promedio de las edades es: " + promedio);
