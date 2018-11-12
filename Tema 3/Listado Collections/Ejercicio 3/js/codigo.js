/**
 * Responde con respecto a Map: 
 *      Un conjunto de elementos de tipo: 
 *      Constructor admite como parámetros:  
 *      Métodos para añadir: 
 *      Métodos para eliminar: 
 *      Métodos para buscar: 
 *      Número de elementos:
 *      Si dos elementos son iguales: 
 *      Se recorren mediante: 
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = `
        Responde con respecto a Map:<br>
        Un conjunto de elementos de tipo: Clave/valor <br>
        Constructor admite como parámetros: Un iterable que puede ser un array o un objeto iterable <br>
        Métodos para añadir: set() <br>
        Métodos para eliminar: clear() y delete() <br>
        Métodos para buscar: get() <br>
        Número de elementos: size <br>
        Si dos elementos son iguales: Se añaden los dos si tienen distinto índice.
        Se recorren mediante: for of y foreach <br>
        `
    }

    window.addEventListener("load", iniciar);
}