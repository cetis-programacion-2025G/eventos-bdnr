Base de Datos — Eventos (MongoDB)

- Base de datos: "eventos_bdnr"
- Motor: MongoDB
- Colecciones: "eventos", "asistentes"

---

Colección: "eventos"

Almacena la información de los eventos disponibles.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
"_id"| "ObjectId"| Sí (auto)| Identificador único del evento
"nombre"| "String"| Sí| Nombre del evento
"fecha"| "String"| Sí| Fecha del evento
"capacidad"| "Int"| Sí| Capacidad máxima de asistentes
"boletos_vendidos"| "Int"| Sí| Cantidad de boletos vendidos
"lugar"| "Object"| Sí| Información del lugar del evento

Documento de ejemplo

{
  "_id": "ObjectId('664a1f...')",
  "nombre": "Concierto Primavera",
  "fecha": "2026-06-15",
  "capacidad": 200,
  "boletos_vendidos": 45,
  "lugar": {
    "nombre": "Auditorio Central"
  }
}

---

Colección: "asistentes"

Almacena los asistentes registrados en los eventos.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
"_id"| "ObjectId"| Sí (auto)| Identificador único del asistente
"nombre"| "String"| Sí| Nombre del asistente
"email"| "String"| Sí| Correo electrónico
"id_evento"| "ObjectId"| Sí| Referencia al evento
"cantidad"| "Int"| Sí| Cantidad de entradas compradas

Documento de ejemplo

{
  "_id": "ObjectId('664b2e...')",
  "nombre": "Ana Lopez",
  "email": "ana@ejemplo.com",
  "id_evento": "ObjectId('664a1f...')",
  "cantidad": 2
}

---

Relaciones entre colecciones

En MongoDB no existen llaves foráneas. Las relaciones se realizan mediante referencias utilizando "ObjectId".

asistentes.id_evento → eventos._id

Referencia utilizada

La colección "asistentes" guarda el identificador del evento mediante el campo:

{
  "id_evento": "ObjectId('664a1f...')"
}

Documento embebido utilizado

En la colección "eventos" se embebe la información del lugar:

{
  "lugar": {
    "nombre": "Auditorio Central"
  }
}

Justificación

Se utiliza una referencia para relacionar asistentes con eventos porque un evento puede tener muchos asistentes.

Se utiliza un documento embebido para almacenar la información del lugar porque pertenece directamente al evento y no requiere una colección independiente.

---

Índices sugeridos

db.asistentes.createIndex({ id_evento: 1 })

db.eventos.createIndex({ fecha: 1 })

db.asistentes.createIndex({ email: 1 })