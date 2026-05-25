// TODO (MongoDB): db.collection('eventos').find().sort({ fecha: 1 }).toArray()
async function obtenerEventos(datos) {
    return datos.eventos;
}

module.exports = { obtenerEventos };
