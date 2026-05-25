async function actualizarEvento(datos, id, cambios) {
    let evento = null;
    for (let i = 0; i < datos.eventos.length; i++) {
        if (datos.eventos[i].id === id) { evento = datos.eventos[i]; break; }
    }
    if (!evento) return null;
    evento.nombre    = cambios.nombre;
    evento.fecha     = cambios.fecha;
    evento.lugar     = cambios.lugar;
    evento.capacidad = cambios.capacidad;
    return evento;
}

module.exports = { actualizarEvento };
