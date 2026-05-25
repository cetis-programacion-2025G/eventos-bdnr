async function obtenerAsistentes(datos) {
    const resultado = [];
    for (let i = 0; i < datos.asistentes.length; i++) {
        const asistente = datos.asistentes[i];
        let evento = null;
        for (let j = 0; j < datos.eventos.length; j++) {
            if (datos.eventos[j].id === asistente.id_evento) { evento = datos.eventos[j]; break; }
        }
        resultado.push({
            id:           asistente.id,
            nombre:       asistente.nombre,
            email:        asistente.email,
            cantidad:     asistente.cantidad || 1,
            evento:       evento ? evento.nombre : '(desconocido)',
            fecha_evento: evento ? evento.fecha  : '',
        });
    }
    return resultado;
}

module.exports = { obtenerAsistentes };
