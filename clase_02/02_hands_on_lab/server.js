const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  // console.log(`http://localhost:${port}`);
});

class TicketManager {
  constructor() {

    this.eventos = [];
    this._precioBaseDeGanancia = 0.15;
    this.id = 0;
  }


  getEventos() {
    return this.eventos
  }

  addEvento(nombre, lugar, precio, capacidad = 50) {

    const participantes = [];

    const eventToAdd = {
      nombre,
      lugar,
      precio: precio += this._precioBaseDeGanancia,
      capacidad,
      fecha: Date.now(),
      id: this.id++,
      participantes
    }

    // console.log("Se agrega el siguiente evento: ", eventToAdd);
    // console.log("this.eventos", JSON.stringify(this.eventos));
    return this.eventos = [...this.eventos, eventToAdd]

  }

  agregarUsuario(id_evento, id_usuario) {
    console.log("id_usuario", id_usuario);
    const encontrarIdEvento = this.eventos.find((event) => event.id === id_evento);
    if (!encontrarIdEvento) {
      return `Evento con ID ${id_evento} no encontrado.`;
    }

    const encontrarUsuario = encontrarIdEvento.participantes.find((user, i) => user === id_usuario);

    if (encontrarUsuario === id_usuario ) {
      console.log(`Usuario ${id_usuario} ENCONTRADO, NO se agregará al evento.`);
      return `Usuario ${id_usuario} ENCONTRADO, NO se agregará al evento.`;
    }

    encontrarIdEvento.participantes = [...encontrarIdEvento.participantes, id_usuario];
    console.log(`Se agrega el usuario ${id_usuario}. Queda así el arreglo:`, encontrarIdEvento.participantes);

    return `Se agrega el usuario ${id_usuario}. Queda así el arreglo: ${encontrarIdEvento.participantes}`;
  }
}


const Ticket = new TicketManager()

const eventToAdd = {
  nombre: "nombre",
  lugar: "lugar",
  precio: 100,
  capacidad: 20,
}

Ticket.addEvento("nombre", "lugar", 100, 20);
Ticket.addEvento("nombre", "lugar", 100, 20);
// console.log(Ticket.addEvento("nombre", "lugar", 100, 20));
// console.log(Ticket.addEvento("nombre2", "lugar2", 200, 20));


// Ticket.agregarUsuario(1, 0);
(Ticket.agregarUsuario(1, 0));
(Ticket.agregarUsuario(1, 0));
(Ticket.agregarUsuario(1, 12));
(Ticket.agregarUsuario(1, 2));