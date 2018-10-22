/**
 * Script de la ventana nueva del ejercicio multiples ventanas
 * Autor: José Rafael Álvarez Espino
 *
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 *      miVentana = window.open('','','width=200,height=200');
 *      miVentana.document.open();
 *      miVentana.document.write() 
 *          Añade el esqueleto básico: html, head, title, body, ul...
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