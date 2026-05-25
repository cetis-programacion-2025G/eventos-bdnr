const { obtenerEventos }    = require('../../db/eventos/obtenerEventos');
const { insertarAsistente } = require('../../db/asistentes/insertarAsistente');
const { limpiarPantalla, dibujarTabla, titulo } = require('../../utils/ui');
const { preguntar, pedirEntero } = require('../../utils/input');

async function registrarAsistente(datos) {
    let continuar = true;
    while (continuar) {
        limpiarPantalla();
        const eventos = await obtenerEventos(datos);
        const filas = eventos.map(e => ({
            ...e,
            disponibles: e.capacidad - e.boletos_vendidos <= 0 ? 'Agotado' : e.capacidad - e.boletos_vendidos,
        }));
        console.log('');
        titulo('REGISTRO DE ASISTENTES', 69);
        dibujarTabla(filas, [
            { titulo: 'ID',          clave: 'id',          ancho: 4  },
            { titulo: 'Nombre',      clave: 'nombre',       ancho: 22 },
            { titulo: 'Fecha',       clave: 'fecha',        ancho: 10 },
            { titulo: 'Vendidos',    clave: 'boletos_vendidos', ancho: 8 },
            { titulo: 'Disponibles', clave: 'disponibles',  ancho: 11 },
        ]);

        const disponiblesIds = eventos.filter(e => e.boletos_vendidos < e.capacidad).map(e => e.id);
        if (disponiblesIds.length === 0) {
            console.log('\n  No hay eventos con boletos disponibles.');
            break;
        }

        const validos = [0, ...disponiblesIds];
        const id_evento = await pedirEntero('  ID Evento (0 para volver)', validos);
        if (id_evento === 0) break;

        const evento      = eventos.find(e => e.id === id_evento);
        const disponibles = evento.capacidad - evento.boletos_vendidos;
        const nombre      = await preguntar('  Nombre del asistente');
        const email       = await preguntar('  Email');

        let cantidad = 0;
        while (cantidad < 1 || cantidad > disponibles) {
            const entrada = parseInt(await preguntar(`  Cantidad de entradas (max ${disponibles})`), 10);
            if (!isNaN(entrada) && entrada >= 1 && entrada <= disponibles) {
                cantidad = entrada;
            } else {
                console.log(`  Cantidad invalida. Ingresa entre 1 y ${disponibles}.`);
            }
        }

        const nuevo = await insertarAsistente(datos, { nombre, email, id_evento, cantidad });
        console.log(`\n  Asistente "${nuevo.nombre}" registrado con ${nuevo.cantidad} entrada(s). ID: ${nuevo.id}.`);

        const resp = (await preguntar('\n  ¿Registrar otro asistente? (s/n)')).toLowerCase();
        if (resp !== 's') continuar = false;
    }
}

module.exports = { registrarAsistente };
