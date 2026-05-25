const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarAsistentes }   = require('./listarAsistentes');
const { registrarAsistente } = require('./registrarAsistente');

async function menuAsistentes(datos) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('ASISTENTES', 103);
        console.log('─'.repeat(105));
        console.log('  1. Ver asistentes');
        console.log('  2. Registrar asistente');
        console.log('  0. Volver');
        console.log('─'.repeat(105));
        const op = await pedirEntero('Opcion', [0, 1, 2]);
        switch (op) {
            case 1: await listarAsistentes(datos);   await esperarEnter(); break;
            case 2: await registrarAsistente(datos); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuAsistentes };
