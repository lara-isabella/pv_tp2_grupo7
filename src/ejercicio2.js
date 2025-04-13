console.log("Primeros 10 números pares:");
let contador = 0;
let numero = 1;
while (contador < 10) {
    if (numero % 2 === 0) {
        console.log(numero);
        contador++;
    }
    numero++;
}