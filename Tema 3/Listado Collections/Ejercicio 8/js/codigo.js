/**
 * Responde con respecto a WeakSet: 
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
        Responde con respecto a WeakSet:<br>
        Un conjunto de elementos de tipo: objetos <br>
        Constructor admite como parámetros: Un objeto iterable<br>
        Métodos para añadir: add() <br>
        Métodos para eliminar: delete() <br>
        Métodos para buscar: has() <br>
        Número de elementos: No contiene ningún método <br>
        Si dos elementos son iguales: Si tienen la misma referencia de memoria no se añade el último. <br>
        Se recorren mediante: No proporciona ningún método para recorrerlo <br>
        `
    }

    window.addEventListener("load", iniciar);
}