async function insertarAsistente(datos, nuevoAsistente) {
    let id;
    if (datos.asistentes.length > 0) {
        id = datos.asistentes[datos.asistentes.length - 1].id + 1;
    } else {
        id = 1;
    }
    const cantidad = nuevoAsistente.cantidad || 1;
    const asistente = {
        id:        id,
        nombre:    nuevoAsistente.nombre,
        email:     nuevoAsistente.email,
        id_evento: nuevoAsistente.id_evento,
        cantidad:  cantidad,
    };
    datos.asistentes.push(asistente);
    for (let i = 0; i < datos.eventos.length; i++) {
        if (datos.eventos[i].id === nuevoAsistente.id_evento) { datos.eventos[i].boletos_vendidos += cantidad; break; }
    }
    return asistente;
}

module.exports = { insertarAsistente };
