const { buscarEvento }     = require('../../db/eventos/buscarEvento');
const { actualizarEvento } = require('../../db/eventos/actualizarEvento');
const { listarEventos }    = require('./listarEventos');
const { preguntar }        = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function editarEvento(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('EDITAR EVENTO', 100);
    await listarEventos(datos);
    if (datos.eventos.length === 0) return;
    console.log('  (0 para cancelar)');
    const id = parseInt(await preguntar('  ID a editar'), 10);
    if (id === 0) return;
    const e  = await buscarEvento(datos, id);
    if (!e) { console.log('\n  Evento no encontrado.'); return; }
    console.log('\n  (Enter para conservar el valor actual)\n');
    const nombre    = (await preguntar(`  Nombre   [${e.nombre}]: `))   || e.nombre;
    const fecha     = (await preguntar(`  Fecha    [${e.fecha}]: `))    || e.fecha;
    const lugar     = (await preguntar(`  Lugar    [${e.lugar}]: `))    || e.lugar;
    const capStr    =  await preguntar(`  Capacidad [${e.capacidad}]: `);
    const capacidad = capStr ? parseInt(capStr, 10) : e.capacidad;
    await actualizarEvento(datos, id, { nombre, fecha, lugar, capacidad });
    console.log('\n  Evento actualizado.');
}

module.exports = { editarEvento };
