/**
 * Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        mostrarComprobacionIn(document.getElementById("informacion2"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = 'El operador in devuelve true si la propiedad especificada está en el objeto especificado o su prototipo.';
    }

    function mostrarComprobacionIn(informacion2){
        let array = [0,1,2,"hola",4,5,6,"adios"];
        informacion2.innerHTML += "Index 7 en el array -> "+(7 in array)+"<br/>";
        informacion2.innerHTML += "Elemento 'hola' en array -> "+('hola' in array)+" ya que no es un índice, sino un valor<br/>";
        informacion2.innerHTML += "Length en array -> "+('length' in array)+" ya que es una propiedad del array<br/>";
    }

    window.addEventListener("load", iniciar);
}