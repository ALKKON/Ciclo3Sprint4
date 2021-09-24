// Validar formulario de registro
function checkContrasena (valor){
    let contrasena_valida = /^[a-zA-Z0-9]{8,50}$/;
    if (contrasena_valida.test(valor.value) ){
        return true;
    }else{
        return false;
    }
}


module.exports = checkNombre;
module.exports = checkTelefono;
module.exports = checkDir;
module.exports = checkCorreo;
module.exports = checkContrasena;