class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    mostrarCurso() {
        console.log(`Curso: ${this.nombreCurso}`);
        console.log('Lista de Estudiantes:');
        this.estudiantes.forEach((est, index) => {
            console.log(`${index + 1}. ${est.mostrarDatos()}`);
        });
    }
}

module.exports = Curso;
