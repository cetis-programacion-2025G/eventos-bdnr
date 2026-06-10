async function actualizarEvento(db, id, cambios) {
    await db.collection('eventos').updateOne({
        _id: id
    }, { 
        $set: {
            nombre: cambios.nombre,
            fecha: cambios.fecha,
            lugar: cambios.lugar,
            capacidad: cambios.capacidad
        }
    });
}

module.exports = { actualizarEvento };
