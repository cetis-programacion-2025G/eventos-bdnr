const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarEventos } = require('./listarEventos');
const { agregarEvento } = require('./agregarEvento');
const { editarEvento }  = require('./editarEvento');
const { eliminarEvento } = require('./eliminarEvento');

async function menuEventos(db) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('EVENTOS', 100);
        await listarEventos(db);
        console.log('');
        console.log('─'.repeat(102));
        console.log('  1. Ver eventos');
        console.log('  2. Agregar evento');
        console.log('  3. Editar evento');
        console.log('  4. Eliminar evento');
        console.log('  0. Volver');
        console.log('─'.repeat(102));
        const op = await pedirEntero('Opcion', [0, 1, 2, 3, 4]);
        switch (op) {
            case 1: await listarEventos(db);   break;
            case 2: await agregarEvento(db);   break;
            case 3: await editarEvento(db);    break;
            case 4: await eliminarEvento(db);  break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuEventos };
