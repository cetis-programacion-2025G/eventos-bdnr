async function buscarEvento(datos, id) {
    for (let i = 0; i < datos.eventos.length; i++) {
        if (datos.eventos[i].id === id) return datos.eventos[i];
    }
    return null;
}

module.exports = { buscarEvento };
