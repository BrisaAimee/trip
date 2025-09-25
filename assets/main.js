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