/**
 * Responde con respecto a Set:
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
        Responde con respecto a Set:<br>
        Un conjunto de elementos de tipo: valor<br>
        Constructor admite como parámetros: Un iterable que puede ser un array o un string<br>
        Métodos para añadir: add() <br>
        Métodos para eliminar: clear() y delete() <br>
        Métodos para buscar: has() <br>
        Número de elementos: size <br>
        Si dos elementos son iguales: Se reemplaza <br>
        Se recorren mediante: for of y foreach <br>
        `
    }

    window.addEventListener("load", iniciar);
}