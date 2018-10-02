/**
 * Script del ejercicio 11
 * Autor: José Rafael Álvarez Espino
 */

/**
  * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:
  *   Número de enlaces de la página
  *   Dirección a la que enlaza el penúltimo enlace
  *   Numero de enlaces que enlazan a http://prueba
  *   Número de enlaces del tercer párrafo
  * */

{
    document.addEventListener("DOMContentLoaded", iniciar);

    function numero_enlaces(contenido, enlaces) {
        contenido.innerHTML = "La página tiene " + enlaces.length + " enlaces.";
    }

    function penultimo_enlace(contenido, enlaces) {
        contenido.innerHTML += "<br/> El penúltimo enlace enlaza a: " + enlaces[enlaces.length - 2].href;
    }
    function enlaces_a_prueba(contenido, enlaces) {
        let contador = 0;

        for (let i = 0; i < enlaces.length; i++) {
            if (enlaces[i].href == "http://prueba/") 
                contador++
        }
        contenido.innerHTML += "<br/> Nº de enlaces hacia http://prueba/: " + contador;
    }
    function numero_enlaces_tercer_parrafo(contenido, parrafos){
      contenido.innerHTML += "<br/> Nº de enlaces en el tercer párrafo " + parrafos[3].getElementsByTagName("a").length;
    }

    function iniciar() {
        let contenido = document.getElementById("contenido");
        let enlaces = document.getElementsByTagName("a");
        numero_enlaces(contenido, enlaces);
        penultimo_enlace(contenido, enlaces);
        enlaces_a_prueba(contenido, enlaces);
        numero_enlaces_tercer_parrafo(contenido,document.getElementsByTagName("p"));
    }
}