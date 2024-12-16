### [Enlace a la presentación](https://docs.google.com/presentation/d/1Ue3LTQUxuwKs4c80b71RL4cX5rzNpHwk5GxLkLc62zw/edit#slide=id.g1267f3579e2_0_296)

# HANDS ON LAB | Práctica de módulo nativo: crypto

¿Cómo lo hacemos? 
- Se creará una clase `UsersManager` que permitirá guardar usuarios en un atributo estático. 
- El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
- Utilizar el módulo nativo crypto.
- El manager debe contar con los siguientes métodos:
  - El método `"Crear usuario"`  debe recibir un objeto con los campos:
  - `nombre`
  - `apellido`
  - `nombreDeUsuario`
  - `contraseña`
- El método debe guardar un usuario en un atributo estático llamado `"Usuarios"`, **recordando que la contraseña debe estar hasheada por seguridad**

- El método `"mostrarUsuarios"`  imprimirá en consola todos los usuarios almacenados.
- El método `validarUsuario"`  recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje `"logueado"` , caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
****