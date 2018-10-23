/**
 *Crea una página web con el siguiente comportamiento:
    Un botón "bajar línea" para bajar una línea.
    Un botón "subir línea" para subir una línea
    Un botón "bajar" para bajar una página.
    Un botón "subir" para subir una página.
    Un botón "inicio" para ir al inicio del documento
    Un botón "fin" para ir al final del documento.
    Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
 * */

{
    
    function iniciar() {
        document.getElementById("bajarL").addEventListener("click",bajarLinea);
        document.getElementById("subirL").addEventListener("click",subirLinea);
        document.getElementById("bajarP").addEventListener("click",bajarPagina);
        document.getElementById("subirP").addEventListener("click",subirPagina);
        document.getElementById("final").addEventListener("click",final);
        document.getElementById("principio").addEventListener("click",principio);
    }

    function bajarLinea(){
        scroll(scrollX,scrollY+5);
    }
    function subirLinea(){
        scroll(scrollX,scrollY-5);
    }
    function bajarPagina(){
        scroll(scrollX,scrollY+innerHeight);
    }
    function subirPagina(){
        scroll(scrollX,scrollY-innerHeight);
    }
    function final(){
        scroll(scrollX,scrollY+document.body.scrollHeight);
    }
    function principio(){
        scroll(scrollX,scrollY-document.body.scrollHeight);
    }
    


    window.addEventListener("load", iniciar);
}