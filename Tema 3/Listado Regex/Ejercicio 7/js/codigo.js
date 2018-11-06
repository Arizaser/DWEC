/**
 * Mediante un ejemplo real, indica la utilidad del método test();
 * */

{   
    let expresion = /hola mundo/i;
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("boton").addEventListener("click",comprobar);
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada."+
        "Devuelve true o false, por lo que sirve para realizar operaciones lógicas. Escribe hola mundo abajo y te diré si lo has escrito correctamente"
    }

    function comprobar(){
        let cadena = document.getElementById("cadena").value;
        let mensaje = "Has escrito hola mundo";
        if(expresion.test(cadena))
            mensaje += " correctamente"
        else
            mensaje += " incorrectamente"
        document.getElementById("informacion2").innerHTML = mensaje;
    }

    window.addEventListener("load", iniciar);
}