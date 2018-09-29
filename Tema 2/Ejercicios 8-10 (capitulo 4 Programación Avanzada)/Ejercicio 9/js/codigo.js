/**
 * Script del ejercicio 9
 * Autor: José Rafael Álvarez Espino
 */

 /**
  * Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
  * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
  * */


var mostrar = document.getElementById("contenido");
function calcular_formacion_cadena() {
    let cadena = prompt("Introduce una cadena");
    let mensaje;
    if (cadena == cadena.toUpperCase()) 
        mensaje = "La cadena está escrita en mayúsculas";
    else if (cadena == cadena.toLowerCase()) 
        mensaje = "La cadena está escrita en minúsculas";
    else 
        mensaje = "La cadena está escrita en mayúsculas y minúsculas";
    mostrar.textContent = mensaje;
    }
window.onload = calcular_formacion_cadena();    

 