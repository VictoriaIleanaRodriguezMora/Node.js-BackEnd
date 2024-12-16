### Clase 3 - Programación sincrónica y asincrónica

# HANDS ON LAB | Calculadora positiva con promesas

¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba

### [Enlace a la presentación](https://docs.google.com/presentation/d/1Fe7xU7Pveo9y6BIKN9ogJSoTDosp2RqjnDTcFaKh-uU/edit#slide=id.g11af22068b0_8_705)

- Definir función `suma`:
  - Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
  - En caso de que algún sumando sea 0, rechazar la promesa indicando "Operación innecesaria".
  - En caso de que la suma sea negativa, rechazar la promesa indicando "La calculadora sólo debe devolver valores positivos"

- Definir función `resta`:
  - Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
  - En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando "Operación inválida
  - En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando "La calculadora sólo puede devolver valores positivos".

- Definir una función `multiplicación`:
  - Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
  - Si el producto es negativo, rechazar la oferta indicando "La calculadora sólo puede devolver valores positivos".

- Definir la misma función `división` utilizada en esta clase (se refiere a la de la ppt).

- Definir una función asíncrona `"cálculos"`, y realizar pruebas utilizando async/await y try/catch
