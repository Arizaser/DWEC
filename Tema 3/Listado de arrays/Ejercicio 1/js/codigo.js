/**
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        mostrarArray(document.getElementById("informacion2"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = `
        Argumentos:
        Value -> Valor del elemento de la matriz.<br/>
        Index -> Índice numérico de la matriz.<br/>
        Array -> Objeto array que contiene el elemento`;
    }

    function mostrarArray(informacion2){
        let array = [0,1,2,"hola",4,5,6,"adios"];
        array.forEach(function(value,index,array){
            informacion2.innerHTML += "Valor: "+value+" Index: "+index+" Array:"+array+"<br/>";
        })
    }

    window.addEventListener("load", iniciar);
}