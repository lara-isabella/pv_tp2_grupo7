document.addEventListener("DOMContentLoaded", function() {
    const paisSelect = document.getElementById("pais");
    const capitalSelect = document.getElementById("capital");

    const paisesCapitales = {
        Argentina: "Buenos Aires",
        Brasil: "Brasilia",
        Chile: "Santiago",
        Colombia: "Bogotá",
        México: "Ciudad de México",
        Perú: "Lima"
    };


    for (let pais in paisesCapitales) {
        let option = document.createElement("option");
        option.value = pais;
        option.textContent = pais;
        paisSelect.appendChild(option);
    }

    paisSelect.addEventListener("change", function() {
        capitalSelect.innerHTML = ""; 
        let capital = paisesCapitales[paisSelect.value];

        if (capital) {
            let option = document.createElement("option");
            option.value = capital;
            option.textContent = capital;
            capitalSelect.appendChild(option);

            console.log(`País seleccionado: ${paisSelect.value}, Capital: ${capital}`);
        }
    });

    paisSelect.selectedIndex = 0;
    paisSelect.dispatchEvent(new Event("change"));
});