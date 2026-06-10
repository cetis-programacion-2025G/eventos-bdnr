const { insertarEvento }                   = require('../../db/eventos/insertarEvento');
const { preguntar, esperarEnter }                        = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function agregarEvento(db) {
    limpiarPantalla();
    console.log('');
    tituloUI('AGREGAR EVENTO', 100);
    console.log('(o en cualquier campo para cancelar)');
    const nombre    = await preguntar('  Nombre');
    if(nombre === '0') { console.log('\n Cancelado.'); return; }
    const fecha     = await preguntar('  Fecha (YYYY-MM-DD)');
    if(fecha === '0') { console.log('\n Cancelado.'); return;}
    const lugar     = await preguntar('  Lugar');
    if(lugar === '0') { console.log('\n Cancelado.'); return;}
    const capacidadInput = await preguntar('  Capacidad');
    if (capacidadInput === '0') { console.log('\n Cancelado.');  return;}
    const capacidad = parseInt(capacidadInput, 10);
    const nuevo   = await insertarEvento(db, { 
        nombre, 
        fecha,
        lugar,
        capacidad, 
        boletos_vendidos: 0
     });
    console.log(`\n  Evento "${nombre}" fue agregado `);
    await esperarEnter();
}

module.exports = { agregarEvento };
