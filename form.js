// Validar formulario de "Nombre"
const formulario= document.getElementById('form-registro');
console.log(formulario);
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(checkNombre(document.getElementById('nombre')))
});

function checkNombre(valor) {

    console.log(valor)
    let nombre_valido =/^[a-zA-Z]+$/;

    if (nombre_valido.test(valor.value) ){
        return true;
    } else {
        return false;
    }
}

//module.exports = checkNombre;
//module.exports = checkTelefono;
//module.exports = checkDir;
// module.exports = checkCorreo;
//module.exports = checkContrasena;