/**
 * Crea  una función que devuelva un array con cada uno de los argumentos. 
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * */

{
    function iniciar() {
        mostrarArray(document.getElementById("informacion"));
    }

    function mostrarArray(informacion){
        informacion.innerHTML = "Mostrando array: "+crearArray(1,2,3,"hola","adios",[1,2,3,4,5,6],true,false);
    }

    function crearArray(){
        let array = [];
        for (let i = 0; i < arguments.length; i++){
            if(Array.isArray(arguments[i])){
                arguments[i].forEach(function(valor){
                    array.push(valor);
                });
            }else
                array.push(arguments[i]);
        }
        return array;
    }

    window.addEventListener("load", iniciar);
}