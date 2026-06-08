const { datosIniciales }   = require('./datos');
const { limpiarPantalla, titulo } = require('./utils/ui');
const { pedirEntero }      = require('./utils/input');
const { menuEventos }      = require('./pantallas/eventos/menuEventos');
const { menuAsistentes }   = require('./pantallas/asistentes/menuAsistentes');
const { conectar } = require('./conexion');

async function main() {
    const { cliente, db } = await conectar();

    const datos = datosIniciales();
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('EVENTOS — SISTEMA DE GESTION');
        console.log('─'.repeat(46));
        console.log('  1. Eventos');
        console.log('  2. Asistentes');
        console.log('  0. Salir');
        console.log('─'.repeat(46));
        const op = await pedirEntero('Opcion', [0, 1, 2]);
        switch (op) {
            case 1: await menuEventos(datos, db);    break;
            case 2: await menuAsistentes(datos, db); break;
            case 0: salir = true; break;
        }
    }
    await cliente.close();
    console.log('\nHasta luego.\n');
}

main();
