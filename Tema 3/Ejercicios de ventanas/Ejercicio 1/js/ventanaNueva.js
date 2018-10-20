/**
 * Script de la ventana nueva del ejercicio apariencia de ventanas
 * Autor: José Rafael Álvarez Espino
 *
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 *     window.open()
 *     document.write() 
 *        Añade el esqueleto básico: html, head, title, body, ul...
 * */

{

    function iniciar() {
        escribirInformacion();
        document.getElementById("cerrarVentana").addEventListener("click",function(){
            close();
        });
    }

    function escribirInformacion(){
        document.getElementById("height").innerText = "Height: "+window.outerHeight;
        document.getElementById("width").innerText = "Width: "+window.outerWidth;
    }

    window.addEventListener("load", iniciar);
}