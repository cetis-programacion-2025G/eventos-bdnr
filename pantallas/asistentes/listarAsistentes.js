const { obtenerAsistentes } = require('../../db/asistentes/obtenerAsistentes');
const { dibujarTabla, titulo } = require('../../utils/ui');

async function listarAsistentes(datos) {
    const filas = await obtenerAsistentes(datos);
    const columnas = [
        { titulo: 'ID',       clave: 'id',           ancho: 4  },
        { titulo: 'Nombre',   clave: 'nombre',        ancho: 20 },
        { titulo: 'Email',    clave: 'email',         ancho: 22 },
        { titulo: 'Entradas', clave: 'cantidad',      ancho: 8  },
        { titulo: 'Evento',   clave: 'evento',        ancho: 22 },
        { titulo: 'Fecha',    clave: 'fecha_evento',  ancho: 10 },
    ];
    console.log('');
    titulo('LISTA DE ASISTENTES', 103);
    dibujarTabla(filas, columnas);
}

module.exports = { listarAsistentes };
