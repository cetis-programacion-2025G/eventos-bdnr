async function buscarEvento(eventos, posicion) {
    
    const evento = eventos[posicion - 1];

    if (evento) {
        return evento;
    }

    return null;
}

module.exports = { buscarEvento };
