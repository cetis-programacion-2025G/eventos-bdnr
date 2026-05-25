const { obtenerEventos } = require('../../db/eventos/obtenerEventos');
const { dibujarTabla, titulo } = require('../../utils/ui');

async function listarEventos(datos) {
    const eventos = await obtenerEventos(datos);
    const filas = eventos.map(e => ({
        ...e,
        disponibles: e.capacidad - e.boletos_vendidos <= 0 ? 'Agotado' : e.capacidad - e.boletos_vendidos,
    }));
    const columnas = [
        { titulo: 'ID',          clave: 'id',              ancho: 4  },
        { titulo: 'Nombre',      clave: 'nombre',           ancho: 22 },
        { titulo: 'Fecha',       clave: 'fecha',            ancho: 10 },
        { titulo: 'Lugar',       clave: 'lugar',            ancho: 20 },
        { titulo: 'Cap.',        clave: 'capacidad',        ancho: 5  },
        { titulo: 'Vendidos',    clave: 'boletos_vendidos', ancho: 8  },
        { titulo: 'Disponibles', clave: 'disponibles',      ancho: 11 },
    ];
    console.log('');
    titulo('LISTA DE EVENTOS', 100);
    dibujarTabla(filas, columnas);
}

module.exports = { listarEventos };
