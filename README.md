# Proyecto Final BDNR – Eventos con MongoDB

## 1. Historia del problema

Una empresa pequeña organiza eventos escolares y comunitarios. Actualmente registra asistentes y boletos en listas manuales, lo que dificulta saber quién está inscrito a cada evento y cuántos lugares quedan disponibles.

La organización necesita una solución sencilla en terminal que permita guardar la información de forma permanente usando una base de datos no relacional.

---

## 2. Objetivo del proyecto

Crear un sistema CLI para administrar eventos, asistentes e inscripciones básicas.

El sistema base será entregado por el docente funcionando con arreglos en memoria.  
El equipo deberá refactorizarlo para que funcione con **Node.js CLI + MongoDB**.

---

## 3. Situación inicial

El programa ya funciona, pero guarda los datos en arreglos.

Eso significa que:

- Al cerrar el programa, los datos se pierden.
- No existe una base de datos real.
- No hay colecciones, documentos ni referencias persistentes.

---

## 4. Misión del equipo

Modificar el sistema para que los datos se almacenen en MongoDB.

El equipo debe conservar el flujo principal del programa y reemplazar el uso de arreglos por operaciones con base de datos.

---

## 5. Colecciones mínimas sugeridas

- `eventos`
- `asistentes`

El equipo puede agregar campos adicionales, pero no debe aumentar demasiado el alcance.

---

## 6. Funciones mínimas del sistema

- Ver eventos: lista nombre, fecha, lugar, capacidad, boletos vendidos y disponibles.
  Cuando un evento llega a su capacidad máxima debe indicar **Agotado** en la columna de disponibles.
- Agregar evento
- Editar evento
- Eliminar evento
- Registrar asistente: seleccionar evento, ingresar nombre, email y **cantidad de entradas** (máximo = disponibles restantes); `boletos_vendidos` del evento aumenta en esa cantidad.
- Ver asistentes: lista nombre, email, entradas compradas y nombre del evento.

---

## 7. Consulta o reporte obligatorio

Reporte de evento: mostrar nombre del evento, fecha, lugar, capacidad, boletos vendidos y lista de asistentes registrados con sus entradas.

Esta consulta debe obtener información relacionada entre documentos o colecciones.

---

## 8. Requisitos de MongoDB

El proyecto debe incluir:

- Uso de colecciones.
- Documentos con estructura clara.
- Operaciones `insertOne`, `find`, `findOne`, `updateOne` y/o `deleteOne` según aplique.
- Al menos una relación por referencia.
- Al menos un uso de documento embebido.
- Justificación breve de qué se embebió y qué se referenció.

---

## 8.1. Documentación de colecciones obligatoria

El equipo debe entregar un archivo `MODELO.md` en la raíz del proyecto que describa:

1. Las colecciones identificadas y qué entidad representa cada una.
2. Un ejemplo de documento real (con datos) por cada colección.

El archivo debe reflejar la estructura real usada en el proyecto, no un ejemplo genérico.

---

## 9. Modelo esperado en BDNR

### Uso de embedding

En el documento del evento pueden embeberse datos del lugar, agenda del día o información general del evento.

### Uso de referencias

Los asistentes deben referenciar al evento al que pertenecen mediante `id_evento`.

No se permite resolver todo con un solo documento gigante.

---

## 10. Alcance limitado

Para que el proyecto sea posible en dos semanas, **no se pide**:

- No se requiere pago real
- No se requiere código QR
- No se requiere control avanzado de tipos de boleto

---

## 11. Reglas importantes

- No se debe cambiar el objetivo principal del sistema.
- No se deben usar arreglos como almacenamiento final.
- Los datos deben permanecer guardados después de cerrar y volver a abrir el programa.
- La evaluación se enfoca en la integración con MongoDB, no en rediseñar toda la aplicación.

---

## 12. Entregable esperado

El equipo debe entregar:

- Código Node.js CLI funcionando.
- Script JS (`datos.js`) con datos iniciales de prueba para cada colección.
- Archivo `MODELO.md` con la descripción y ejemplos de cada colección.
- Evidencia de colecciones/documentos en MongoDB.
- Evidencia de pruebas.
- Breve explicación del modelo documental.
