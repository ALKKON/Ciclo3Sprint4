// Validar formulario de registro

function checkDir (valor){

    console.log(valor)
    let direccion_valida =/^[a-zA-Z0-9#-\s]{5,50}$/;

    if (direccion_valida.test(valor.value) ){
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