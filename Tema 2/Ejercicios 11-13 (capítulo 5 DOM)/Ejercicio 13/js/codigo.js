/**
 * Script del ejercicio 13
 * Autor: José Rafael Álvarez Espino
 */

/**
  * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada vez que se pulsa sobre el botón.
  * Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la lista existente.
  * Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un botón forma parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
  * */

{
    document.addEventListener("DOMContentLoaded", iniciar);
    

    function annadir() {
        let elemento = document.createElement("li"); 
        let contenido_elemento = document.createTextNode("Elemento de prueba");
        elemento.appendChild(contenido_elemento);
        
        document.getElementById("lista").appendChild(elemento);
    }  

    function iniciar(){
        document.getElementById("boton").addEventListener("click",annadir);
    }
    
}