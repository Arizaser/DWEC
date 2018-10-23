/**
 * Muestra en  una lista la siguiente información.
 * Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document.
 * Explica en cada uno la diferencia con respecto a los demás. 
 *      window.outerHeight
 *      window.innerHeight
 *      window.screen.availHeight
 *      window.screen.height
 *      window.document.clientHeight
 * */

{
    
    function iniciar() {
        crearElementos();
        asignarContenido();
        
    }

    function crearElementos(){
        let ul = document.createElement("ul");
        for (let i = 1; i < 6; i++) {
            let li = document.createElement("li");
            li.setAttribute("id","li"+i);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    }

    function asignarContenido(){
        document.getElementById("li1").innerHTML = "window.outerHeigt: "+window.outerHeight+". Obtiene la altura en pixeles de toda la ventana del navegador.";
        document.getElementById("li2").innerHTML = "window.innerHeight: "+window.innerHeight+". Obtiene la altura interna en pixeles de una ventana del navegador.";
        document.getElementById("li3").innerHTML = "window.screen.availHeight: "+window.screen.availHeight+". Retorna el total de espacio vertical disponible en la pantalla.";
        document.getElementById("li4").innerHTML = "window.screen.height: "+window.screen.height+". Devuelve la altura de la pantalla en píxeles.";
        document.getElementById("li5").innerHTML = "window.document.clientHeight: "+window.document.clientHeight+". devuelve la altura del document en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen..";

    }

    


    window.addEventListener("load", iniciar);
}