async function obtenerEventos(db) {
   return await db.collection('eventos').find().toArray();   
}

module.exports = { obtenerEventos };
