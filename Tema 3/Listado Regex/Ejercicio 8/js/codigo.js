/**
 * Mediante un ejemplo real, indica la utilidad del método exec();
 * */

{   
    let expresion = /er/g;
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("boton").addEventListener("click",comprobar);
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "El método exec() ejecuta una búsqueda de una coincidencia en una cadena especificada. Devuelve un array de resultados, o null."+
        "Escribe palabras y te diré si contienen 'er' y su índice";
    }

    function comprobar(){
        let cadena = document.getElementById("cadena").value;
        let informacion2 = document.getElementById("informacion2");
        while ((array = expresion.exec(cadena)) !== null) {
           informacion2.innerHTML += `Encontrado ${array[0]}. El siguiente comienza en el índice ${expresion.lastIndex}.<br/>`;
        }
    }

    window.addEventListener("load", iniciar);
}