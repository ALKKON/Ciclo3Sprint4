
/**
 * Función del módulo form.js para validar correo electrónico
 * @param {object} input_correo Objeto tipo input para email
 * @returns {boolean} Booleano de validación
 */
function checkCorreo(input_correo) {
    let formato_correo = /^[a-zA-Z0-9À-ÿ.+=_~-]+@[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*$/;
    if (input_correo.value.match(formato_correo)){
        return true;
    } else {
        return false;
    }
}

//module.exports = checkNombre;
//module.exports = checkTelefono;
//module.exports = checkDir;
module.exports = checkCorreo;
//module.exports = checkContrasena;