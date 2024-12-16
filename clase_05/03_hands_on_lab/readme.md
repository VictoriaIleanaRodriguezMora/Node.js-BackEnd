### [Enlace a la presentación](https://docs.google.com/presentation/d/1OhbmOkHE-tBm2iG3kbKypPpHtQyZ_p77Bf07sbZoc2c/edit#slide=id.g11af22068b0_8_697)

# Hands on lab | Práctica de módulo nativo: crypto

¿Cómo lo hacemos? Se creará una clase que permita gestionar usuarios usando fs.promises, éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.


- El Manager debe vivir en una clase en un archivo externo llamado `UsersManager.js` (Como el realizado en la clase pasada).

- El método `CrearUsuario` debe recibir un objeto con los campos:
    - Nombre
    - Apellido
    - Nombre de usuario
    - Contraseña

    - El método debe guardar un usuario en un archivo `Usuarios.json`, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

- El método `ConsultarUsuarios` debe poder leer un archivo `Usuarios.json` y devolver el arreglo correspondiente a esos usuarios