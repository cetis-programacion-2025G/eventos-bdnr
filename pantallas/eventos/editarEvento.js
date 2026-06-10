const { buscarEvento } = require('../../db/eventos/buscarEvento');
const { actualizarEvento } = require('../../db/eventos/actualizarEvento');
const { listarEventos } = require('./listarEventos');
const { preguntar, esperarEnter } = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function editarEvento(db) {
    limpiarPantalla();
    console.log('');
    tituloUI('EDITAR EVENTO', 100);

    const eventos = await listarEventos(db);

    if (eventos.length === 0) return;

    console.log('  (0 para cancelar)');
    const posicion = parseInt(
        await preguntar('  Escribe el # (numero de fila) a editar: '),
        10
    );

    if (posicion === 0) {
        console.log('\n  Cancelado.');
        await esperarEnter();
        return;
    }

    const e = await buscarEvento(eventos, posicion);

    if (e == null) {
        console.log('\n  Evento no encontrado.');
        await esperarEnter();
        return;
    }

    console.log('\n  (Enter para conservar el valor actual)\n');

    const nombre = (await preguntar(`  Nombre [${e.nombre}]: `)) || e.nombre;
    const fecha = (await preguntar(`  Fecha [${e.fecha}]: `)) || e.fecha;
    const lugar = (await preguntar(`  Lugar [${e.lugar}]: `)) || e.lugar;

    const capacidad = (await preguntar(`  Capacidad [${e.capacidad}]: `)) || e.capacidad;

    await actualizarEvento(db, e._id, {
        nombre,
        fecha,
        lugar,
        capacidad
    });

    console.log('\n  Evento actualizado.');

    await esperarEnter();
}

module.exports = { editarEvento };
