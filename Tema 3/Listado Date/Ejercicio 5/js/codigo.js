/**
 * Implementa el método fecha() que devuelva una fecha válida. Lanzará una excepción en caso contrario.
 * */

{   let informacion2;
    function iniciar() {
        informacion2 = document.getElementById("informacion2");
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("comprobar").addEventListener("click",comprobar);
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "Escribe una fecha abajo en formato mes/dia/año";
    }

    function fecha(cadenaFecha){
        let fecha = new Date(cadenaFecha);
        if(isNaN(fecha))
            throw "El valor introducido no es una fecha";
        return fecha
    }

    function comprobar(){
        try{
            informacion2.innerHTML = fecha(document.getElementById("fecha").value);
        }catch(e){
            informacion2.innerHTML = e;
        }
    }

    window.addEventListener("load", iniciar);
}