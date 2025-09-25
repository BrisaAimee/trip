class Viajero {
    constructor(nombre, destino, fecha, etiquetas) {
        this.nombre = nombre;
        this.destino = destino;
        this.fecha = fecha;
        this.etiquetas = etiquetas;
    }

    calcularMatch() {
        // Lógica para calcular el match entre viajeros
        const misEtiquetas = ["aventurero", "fiestero"];
        let coincidencias = 0;

        for (let i = 0; i < this.etiquetas.length; i++) { //El doble for lo puse porque estaba comparando cada etiqueta del viajero con cada etiqueta mia
            for (let j = 0; j < misEtiquetas.length; j++) {
                if (this.etiquetas[i] === misEtiquetas[j]) {
                    coincidencias++;
                }
            }
        }
        return coincidencias;
    }
}

const viajeros = [
    new Viajero("Laura", "España", "2025-10-05", ["aventurero", "fiestero"]),
    new Viajero("Carlos", "Canada", "2025-10-05", ["tranquilo", "aventurero"]),
    new Viajero("Sofía", "Italia", "2025-11-10", ["fiestero", "tranquilo"]),
    new Viajero("Tomás", "España", "2025-10-05", ["aventurero"]),
];

function buscar() {
    let destino = document.getElementById("destino").value;
    let fecha = document.getElementById("fecha").value;
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = ""; // Limpiar resultados anteriores
    
    for (let i = 0; i < viajeros.length; i++) {
        let viajero = viajeros[i]; //viajeros[i] agarra el viajero que corresponde a esa posición

        if (viajero.destino.toLowerCase() === destino.toLowerCase() && viajero.fecha === fecha) {
            let coincidencias = viajero.calcularMatch();
            
            let color;
            if (coincidencias >= 2) {
                color = "alto"; //clases que se ven en el sass
            } else if (coincidencias === 1) {
                color = "medio";
            } else {
                color = "bajo";
            }

            let card = document.createElement("div");
            card.className = `card ${color}`; //asignar la clase card y el color

            let titulo = document.createElement("h3");
            titulo.textContent = viajero.nombre;

            let destinoV = document.createElement("p");
            destinoV.textContent = `Destino: ${viajero.destino}`;

            let fechaV = document.createElement("p");
            fechaV.textContent = `Fecha: ${viajero.fecha}`; //aca estoy creando todos los elementos

            card.appendChild(titulo);
            card.appendChild(destinoV);
            card.appendChild(fechaV); //acá los estoy poniendo dentro de la card
            resultados.appendChild(card); //y aca estoy poniendo la card dentro del div resultados, sino no se ve nada
        }
    }
}