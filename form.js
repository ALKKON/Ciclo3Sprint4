document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(checkGenero(document.getElementsByName('genero'), document.getElementById('femenino')))
    });
});

function checkGenero(genero) {
    if (genero[0].checked || genero[1].checked) {
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