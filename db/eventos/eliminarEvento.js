async function eliminarEvento(datos, id) {
    let idx = -1;
    for (let i = 0; i < datos.eventos.length; i++) {
        if (datos.eventos[i].id === id) { idx = i; break; }
    }
    if (idx === -1) return false;
    datos.eventos.splice(idx, 1);
    return true;
}

module.exports = { eliminarEvento };
