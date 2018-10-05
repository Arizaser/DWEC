/**
 * Script del ejercicio 19
 * Autor: José Rafael Álvarez Espino
 *
* Mejorar el tooltip propuesto añadiendo las siguientes características:
  * Que el tooltip no se muestre instantáneamente, sino que transcurra un cuarto de segundo hasta que se muestre (pista: DELAY)
  * Que exista una separación horizontal de 15 píxel entre el puntero del ratón y el tooltip (pista: OFFSETX)
  * Que el tooltip se muestre en la parte superior del puntero del ratón y no en la parte inferior (pista: ABOVE)
  * */

{

    function iniciar() {
        let enlace =  document.getElementById("enlace");
        enlace.addEventListener("mouseover",ejecutarOverlib);
        enlace.addEventListener("mouseout",nd);
        overlib_pagedefaults(WIDTH,150,FGCOLOR,'#ffffcc',BGCOLOR,'#666666',TEXTFONT,"Arial, Helvetica, Verdana",TEXTSIZE,".8em",DELAY,250,OFFSETX,15,ABOVE);
    }

    function ejecutarOverlib(){
        overlib('Prueba de un tooltip básico y muy sencillo.');
    }

    document.addEventListener("DOMContentLoaded", iniciar);
}