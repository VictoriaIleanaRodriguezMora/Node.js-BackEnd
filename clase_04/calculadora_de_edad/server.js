const moment = require("moment");

const fechaActual = moment().format("LLL");

const fechaNacimiento = moment("2004-09-20", "YYYY-MM-DD");
console.log(fechaNacimiento);

const isValid = fechaNacimiento.isValid();

if (isValid) {
  console.log("La fecha es válida");
} else {
  console.log("La fecha no es válida");
}

const cantDias = fechaNacimiento.diff() // no creo que esto este andando bien

console.log(`Desde el día que naci hasta hoy pasaron: ${cantDias} dias`);
console.log(365 * 20);
