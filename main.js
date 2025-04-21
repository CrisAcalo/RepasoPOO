const Estudiante = require('./estudiante');
const Curso = require('./curso');

const estudiante1 = new Estudiante("Pepe Pecas", 20);
const estudiante2 = new Estudiante("Juan Nada", 22);

const cursoJS = new Curso("Programacion Orientada a Objetos");

cursoJS.agregarEstudiante(estudiante1);
cursoJS.agregarEstudiante(estudiante2);

cursoJS.mostrarCurso();
