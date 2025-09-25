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
    }
}

const viajeros = [
  new Viajero("Laura", "España", "2025-10-05", ["aventurero", "fiestero"]),
  new Viajero("Carlos", "Canada", "2025-10-05", ["tranquilo", "aventurero"]),
  new Viajero("Sofía", "Italia", "2025-11-10", ["fiestero", "tranquilo"]),
  new Viajero("Tomás", "España", "2025-10-05", ["aventurero"]),
];