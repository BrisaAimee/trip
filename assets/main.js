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
    new Viajero("Laura", "Barcelona", "2025-10-05", ["aventurero", "fiestero"]),
    new Viajero("Carlos", "Toronto", "2025-10-05", ["tranquilo", "aventurero"]),
    new Viajero("Sofía", "Roma", "2025-10-05", ["fiestero", "tranquilo"]),
    new Viajero("Tomás", "Barcelona", "2025-10-05", ["aventurero"]),
    new Viajero("Marta", "Toronto", "2025-10-05", ["fiestero"]),
    new Viajero("Ana", "Barcelona", "2025-10-05", ["tranquilo"]),
    new Viajero("Luis", "Barcelona", "2025-10-05", ["aventurero", "fiestero"]),
    new Viajero("Elena", "Toronto", "2025-10-05", ["tranquilo", "aventurero"]),
    new Viajero("Javier", "Roma", "2025-10-05", ["fiestero", "tranquilo"])
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
    actividades(destino);
}

async function actividades(destino) { //api para traer info de la ciudad pero la versión en español no anda
    const url = `https://en.wikivoyage.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&origin=*&titles=${destino}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const page = Object.values(data.query.pages)[0];
        const texto = page?.extract || "No se encontró información turística.";

        const contenedor = document.getElementById("resultados");

        const actividades = document.createElement("div");
        actividades.className = "actividades";

        const titulo = document.createElement("h3");
        titulo.textContent = `Información de ${destino}`;

        const parrafo = document.createElement("p");
        parrafo.textContent = texto;

        actividades.appendChild(titulo);
        actividades.appendChild(parrafo);
        contenedor.appendChild(actividades);


    } catch (err) {
        console.error("Error al traer información:", err);
    }
}


//esta seccion es para el carrousel de experiencias

const experiencias = [
  { nombre: "Laura", texto: "Conocí gente increíble en Barcelona y fue el mejor viaje de mi vida." },
  { nombre: "Carlos", texto: "En Toronto descubrí lugares que nunca hubiera visitado solo." },
  { nombre: "Sofía", texto: "Roma es mágica, compartirla con otro viajero lo hizo aún mejor." },
  { nombre: "Tomás", texto: "Viajando acompañado me animé a hacer cosas nuevas." }
];

let i = 0;

function mostrarExperiencia() {
  const exp = experiencias[i];
  const contenedor = document.getElementById("experiencia");
  
  // limpia el contenido anterior
  contenedor.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card-exp";

  const titulo = document.createElement("h3");
  titulo.textContent = exp.nombre;

  const texto = document.createElement("p");
  texto.textContent = exp.texto;

  card.appendChild(titulo);
  card.appendChild(texto);

  contenedor.appendChild(card);
}

function siguiente() {
  i = i + 1;
  if (i >= experiencias.length) {
    i = 0;
  }
  mostrarExperiencia();
}

function anterior() {
  i = i - 1;
  if (i < 0) {
    i = experiencias.length - 1;
  }
  mostrarExperiencia();
}

mostrarExperiencia();

