const db = db.getSiblingDB('eventos_bdnr');

db.eventos.drop();
db.asistentes.drop();

const resEventos = db.eventos.insertMany([
    { nombre: 'Concierto Primavera',    fecha: '2026-06-15', lugar: 'Auditorio Central',    capacidad: 200, boletos_vendidos: 45 },
    { nombre: 'Feria del Libro',        fecha: '2026-06-20', lugar: 'Biblioteca Municipal', capacidad: 100, boletos_vendidos: 67 },
    { nombre: 'Torneo de Robotica',     fecha: '2026-07-05', lugar: 'CETIS Auditorio',      capacidad: 50,  boletos_vendidos: 30 },
    { nombre: 'Obra de Teatro Escolar', fecha: '2026-07-12', lugar: 'Salon de Actos',       capacidad: 80,  boletos_vendidos: 15 }
]);

const conciertoId = resEventos.insertedIds[0];
const feriaId     = resEventos.insertedIds[1];
const roboticaId  = resEventos.insertedIds[2];
const teatroId    = resEventos.insertedIds[3];

db.asistentes.insertMany([
    { nombre: 'Ana Lopez',     email: 'ana@ejemplo.com',    id_evento: conciertoId, cantidad: 2 },
    { nombre: 'Carlos Perez',  email: 'carlos@ejemplo.com', id_evento: conciertoId, cantidad: 1 },
    { nombre: 'Sofia Torres',  email: 'sofia@ejemplo.com',  id_evento: feriaId,     cantidad: 3 },
    { nombre: 'Luis Garcia',   email: 'luis@ejemplo.com',   id_evento: feriaId,     cantidad: 1 },
    { nombre: 'Maria Sanchez', email: 'maria@ejemplo.com',  id_evento: roboticaId,  cantidad: 1 }
]);