const { insertarEvento }                   = require('../../db/eventos/insertarEvento');
const { preguntar }                        = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function agregarEvento(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('AGREGAR EVENTO', 100);
    const nombre    = await preguntar('  Nombre');
    const fecha     = await preguntar('  Fecha (YYYY-MM-DD)');
    const lugar     = await preguntar('  Lugar');
    const capacidad = parseInt(await preguntar('  Capacidad'), 10);
    const nuevo     = await insertarEvento(datos, { nombre, fecha, lugar, capacidad });
    console.log(`\n  Evento "${nuevo.nombre}" agregado con ID ${nuevo.id}.`);
}

module.exports = { agregarEvento };
