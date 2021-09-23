document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(checkGenero(document.getElementById('masculino'), document.getElementById('femenino')))
    });
});

function checkGenero(masculino, femenino) {

    if (masculino.checked || femenino.checked) {
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