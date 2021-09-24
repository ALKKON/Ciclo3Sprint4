/**
* Función del módulo form.js para validar el nombre de usuario
* @param {object} inputNombre Objeto tipo input para nombre de usuario
* @returns {boolean} Booleando de validación
*/
function checkNombre() {
    let formatoNombre = /^\w+[^.\n\d]{4,30}$/;
    if (formatoNombre.test(document.getElementById('nombre').value)) {
        return false;
    } else {
        return true;
    }
}

/**
 * Función del módulo form.js para validar el número de teléfono
 * @param {object} inputTelefono Objeto tipo input para el teléfono
 * @returns {boolean} Booleando de validación
 */
function checkTelefono() {
    let formatoTelefono = /^[0-9]{7}$/;
    if (formatoTelefono.test(document.getElementById('telefono').value)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Función del módulo form.js para validar la dirección
 * @param {object} inputDireccion Objeto tipo input para la dirección
 * @returns {boolean} Booleano de validación
 */
function checkDir() {
    let formatoDireccion = /^\S[a-zA-Z0-9\-\s\#][^\n]{5,50}$/;
    if (formatoDireccion.test(document.getElementById('direccion').value)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Función del módulo form.js para validar correo electrónico
 * @param {object} inputCorreo Objeto tipo input para email
 * @returns {boolean} Booleano de validación
 */
function checkCorreo() {
    let formatoCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*$/;
    if (formatoCorreo.test(document.getElementById('correo').value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Función del módulo form.js para validar la contraseña
 * @param {objecto} inputClave Objeto de tipo input para la contraseña
 * @returns {boolean} Booleando de validación
 */
function checkContrasena() {
    let formatoClave = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\s][^\n]{8,}$/;
    if(formatoClave.test(document.getElementById('clave').value)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {checkDir, checkCorreo, checkTelefono, checkNombre};