/**
 * Busca en el objeto String funciones que simulen la funcionalidad de exec().
 * */

{   
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("boton").addEventListener("click",comprobar);
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "match() -> Se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.<br/>";
    }

    window.addEventListener("load", iniciar);
}