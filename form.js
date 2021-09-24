// Validar formulario de registro
function checkContrasena (valor){
    let contrasena_valida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[\sA-Za-z\d\W]{8,}/;

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