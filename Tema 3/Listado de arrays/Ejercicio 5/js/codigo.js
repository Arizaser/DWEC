/**
 * Crea  una función que devuelva un array con cada uno de los argumentos.
 * */

{
    function iniciar() {
        mostrarArray(document.getElementById("informacion"));
    }

    function mostrarArray(informacion){
        informacion.innerHTML = "Mostrando array: "+crearArray(1,2,3,"hola","adios",true,false);
    }

    function crearArray(){
        let array = [];
        for (let i = 0; i < arguments.length; i++){
            array.push(arguments[i]);
        }
        return array;
    }

    window.addEventListener("load", iniciar);
}