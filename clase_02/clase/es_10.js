// ECMAScript 10

// trim 
// Quita los espacios del principio y del final de un string
// "                 dsdsddssd        " .trim() -> "dsdsddssd"
const texto = `       

Hola     mundo      


`;
const texto1 = "   Hola     mundo      "; // No se pueden hacer saltos de linea con comillas dobles o simples, tienen que ser ` template string
// console.log(texto);
// console.log(texto1);


// flat
// Aplana los elementos de un arreglo. Lleva todos los niveles de profundidad a uno solo. Pero por defecto, sólo te aplana el nivel de prfundidad 1. Si quiero que aplane mas niveles debo decirselo
const array =
    [
        [1, 2, 3],
        [4,
            [5, 6],
            7],
        8,
        [9, 10]
    ];

/* 
Nivel de Profundidad:
                    0: 8
                    1: 1, 2, 3, 4, 7, 9, 10
                    2: 5, 6 
*/

// console.log(array.flat()); // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8, 9, 10 ]
// console.log(array.flat(1)); // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8, 9, 10 ]
// console.log(array.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10  ]
/* interesante */
// console.log(array.flat(0)); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ], 7 ], 8, [ 9, 10 ] ]


const empleado = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    hijos: [
        { nombre: "Pedro", edad: 5 },
        { nombre: "Maria", edad: 7 },
    ],
};

const values = Object.values(empleado).flat();
console.log(values);
/* 
[
  'Juan',
  'Perez',
  30,
  { nombre: 'Pedro', edad: 5 },
  { nombre: 'Maria', edad: 7 }
]
*/

let hijosCount = 0;

for (const value of values) {
    if (typeof value === "object") {
        hijosCount++;
    }
}


