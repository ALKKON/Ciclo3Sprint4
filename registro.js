/**
 * Función para filtrar un arreglo por dirección de correo
 * @param {object} arreglo Arreglo de objetos para filtrar
 * @returns Arreglo filtrado por correo
 */
function filtrarCorreo(arreglo) {
    const filtrado = arreglo.filter(
        obj => Object.keys(obj).some(correo => obj[correo].
            toLowerCase().includes('gmail.com'.toLowerCase()))
    );
    console.info(filtrado);
    return filtrado;
}

module.exports = {agregarRegistro, ordenarArreglo, filtrarCorreo}