const { eliminarEvento: dbEliminar }       = require('../../db/eventos/eliminarEvento');
const { listarEventos }                   = require('./listarEventos');
const { preguntar, esperarEnter }         = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function eliminarEvento(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('ELIMINAR EVENTO', 100);
    await listarEventos(datos);
    if (datos.eventos.length === 0) return;
    console.log('  (0 para cancelar)');
    const id = parseInt(await preguntar('  ID a eliminar'), 10);
    if (id === 0) return;
    const ok = await dbEliminar(datos, id);
    console.log(ok ? '\n  Evento eliminado.' : '\n  Evento no encontrado.');
    await esperarEnter();
}

module.exports = { eliminarEvento };
