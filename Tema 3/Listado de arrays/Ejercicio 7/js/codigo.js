/**
 * Crea una función que elimine todos los undefined de un array.
 * */

{
    function iniciar() {
        mostrarArray(document.getElementById("informacion"));
    }

    function mostrarArray(informacion){
        let array = [1,undefined,3,undefined,4,5,undefined,"hola",undefined,10];
        informacion.innerHTML += "Array original: "+array+"<br/>";
        informacion.innerHTML += "Array sin undefined: "+eliminarUndefined(array);
    }

    function eliminarUndefined(array){
        return array.filter(function(valor){
            return valor != undefined;
        });
    }

    window.addEventListener("load", iniciar);
}