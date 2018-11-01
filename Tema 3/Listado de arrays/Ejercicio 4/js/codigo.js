/**
 * Crea una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
 * */

{
    function iniciar() {
        mostrarArray(document.getElementById("informacion"));
    }

    function mostrarArray(informacion){
        let dimension = 2;
        let nElementos = 7;
        let array = crearArray(dimension,nElementos);
        informacion.innerHTML += "Dimensiones: "+dimension+" Elementos: "+nElementos+"<br/>"
        array.forEach(function(value,index) {
            informacion.innerHTML += "Índice = "+index+" Valor = "+value+"<br/>";
        });
    }

    function crearArray(dimension,nElementos){
        let array = new Array(dimension);
        for (let i = 0; i < array.length; i++) {
            array[i] = new Array(nElementos);
            for (let j = 0; j < array[i].length; j++) {
                array[i][j] = j;
            }
        }
        return array;
    }

    window.addEventListener("load", iniciar);
}