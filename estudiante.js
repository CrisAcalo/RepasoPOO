class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}

module.exports = Estudiante;
