// datos.js — Datos iniciales del sistema de eventos (version sin base de datos)

function datosIniciales() {
    return {
        eventos: [
            { id: 1, nombre: 'Concierto Primavera',   fecha: '2026-06-15', lugar: 'Auditorio Central',   capacidad: 200, boletos_vendidos: 45 },
            { id: 2, nombre: 'Feria del Libro',        fecha: '2026-06-20', lugar: 'Biblioteca Municipal', capacidad: 100, boletos_vendidos: 67 },
            { id: 3, nombre: 'Torneo de Robotica',     fecha: '2026-07-05', lugar: 'CETIS Auditorio',      capacidad: 50,  boletos_vendidos: 30 },
            { id: 4, nombre: 'Obra de Teatro Escolar', fecha: '2026-07-12', lugar: 'Salon de Actos',       capacidad: 80,  boletos_vendidos: 15 },
        ],
        asistentes: [
            { id: 1, nombre: 'Ana Lopez',     email: 'ana@ejemplo.com',    id_evento: 1, cantidad: 2 },
            { id: 2, nombre: 'Carlos Perez',  email: 'carlos@ejemplo.com', id_evento: 1, cantidad: 1 },
            { id: 3, nombre: 'Sofia Torres',  email: 'sofia@ejemplo.com',  id_evento: 2, cantidad: 3 },
            { id: 4, nombre: 'Luis Garcia',   email: 'luis@ejemplo.com',   id_evento: 2, cantidad: 1 },
            { id: 5, nombre: 'Maria Sanchez', email: 'maria@ejemplo.com',  id_evento: 3, cantidad: 1 },
        ],
    };
}

module.exports = { datosIniciales };
