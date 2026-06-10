async function insertarEvento(db, nuevoEvento) {
    await db.collection('eventos').insertOne(nuevoEvento);   
}

module.exports = { insertarEvento };
