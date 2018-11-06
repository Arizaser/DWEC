/**
 * Busca en el objeto String funciones que simulen la funcionalidad de test()
 * */

{   
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("boton").addEventListener("click",comprobar);
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "search() -> Ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.<br/>";
    }

    window.addEventListener("load", iniciar);
}