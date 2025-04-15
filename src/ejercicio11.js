
let km= prompt("Ingrese el número de kilómetros recorridos:");
let ls = prompt("Ingrese el número de litros de combustible consumidos:");


km = parseFloat(km);
ls = parseFloat(ls);


const consumoPorKm = ls / km;


alert(`El consumo de combustible por kilómetro es: ${consumoPorKm.toFixed(2)} litros/km`);
