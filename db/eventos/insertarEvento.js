async function insertarEvento(datos, nuevoEvento) {
    let id;
    if (datos.eventos.length > 0) {
        id = datos.eventos[datos.eventos.length - 1].id + 1;
    } else {
        id = 1;
    }
    const evento = {
        id:               id,
        nombre:           nuevoEvento.nombre,
        fecha:            nuevoEvento.fecha,
        lugar:            nuevoEvento.lugar,
        capacidad:        nuevoEvento.capacidad,
        boletos_vendidos: 0,
    };
    datos.eventos.push(evento);
    return evento;
}

module.exports = { insertarEvento };
