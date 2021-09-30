var arreglo=[];
function agregarRegistro(){
    let formData = new FormData(document.getElementById('form-registro'));
        let jsonData = {};
        for (let [nombreElemento, valor ] of formData) {
            jsonData[nombreElemento] = valor;
     
        }
        arreglo.push(jsonData);
        console.log(jsonData);
}
function ordenarArreglo(arreglo){}
function filtrarCorreo(arreglo){}

module.exports = {agregarRegistro, ordenarArreglo, filtrarCorreo}