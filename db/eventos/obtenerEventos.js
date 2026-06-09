async function obtenerEventos(db) {
   const eventos = await db.collection('eventos').find();  
   let posicion = 1; 
   const resultados = [];
   for await (const evento of eventos) {
      const eventoConposicion = evento;
      eventoConposicion.posicion = posicion;
      resultados.push(eventoConposicion);
      posicion++;
   }

   return resultados;
}

module.exports = { obtenerEventos };
