/**
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        mostrarComprobacionIn(document.getElementById("informacion2"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = 'El método Array.isArray() determina si el valor pasado es un Array.Si el objeto es un Array, devuelve true; false, en cualquier otro caso.';
    }

    function mostrarComprobacionIn(informacion2){
        let array = [0,1,2,"hola",4,5,6,"adios"];
        informacion2.innerHTML += "Pasando un array -> "+(Array.isArray(array))+"<br/>";
        informacion2.innerHTML += "Pasando undefined -> "+(Array.isArray(undefined))+"<br/>";
        informacion2.innerHTML += "Pasando cadena 'hola' -> "+(Array.isArray('hola'))+"<br/>";
        informacion2.innerHTML += "Pasando true -> "+(Array.isArray(true))+"<br/>";
    }

    window.addEventListener("load", iniciar);
}