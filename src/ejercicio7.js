const nombres = ["Tomas", "Lautaro", "Yamila", "Lara", "Luisana", "Martina"];

let nombreMasLargo = "";

nombres.forEach(nombre => {
    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
});

console.log("El nombre más largo es:", nombreMasLargo);
