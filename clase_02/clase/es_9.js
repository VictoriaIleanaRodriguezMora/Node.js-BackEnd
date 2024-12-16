// ECMAScript 9

// SPREAD OPERATOR - Copia el contenido de un objeto dentro de otro
const empleado = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    puesto: "Desarrollador",
};

const empleado2 = {
    nombre: "Ana",
    apellido: "Gomez",
    puesto: "Diseñadora",
    sueldo: 1000,
};

const empleado3 = {
    nombre: "Pedro",
    apellido: "Gonzalez",
    experiencia: 2,
    edad: 25,
};

/*  
const resultado = {
    nombre: empleado.nombre,
     apellido: empleado.apellido,
     edad: empleado.edad,
      puesto: empleado.puesto,
}; 
*/
const res = { empleado };
console.log(res);
const resultado = { ...empleado };
console.log(resultado);

// Los campos que sean iguales, va a dejar el del ultimo que se pasó. Los campos que no esten en ambos objetos, se van a poner. Mexcla los objetos.
const resultado1 = { ...empleado, ...empleado2 };
console.log(resultado1);

const resultado2 = { ...empleado, ...empleado2, ...empleado3 };
console.log(resultado2);

// SPREAD OPERATOR - ARRAYS 
// Pone TODO de cada ARRAY. Si se repiten, se ponen 2 veces.
const lista = ["Juan", "Ana", "Pedro"];
const lista2 = ["Maria", "Carlos", "Ana"];

const resultadoLista = [...lista, ...lista2];
console.log(resultadoLista);

// REST OPERATOR

// Desestructuracion
// en ...resto, van a estar todas las demas propiedades del objeto
const { puesto, ...resto } = empleado;
console.log(puesto);
console.log(resto);

// const { puesto, nombre, ...tuki } = empleado;
// console.log(puesto);
// console.log(tuki);