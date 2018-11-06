/**
 * Implementa el método esFecha() que devuelva si el argumento es una fecha o no.
 * */

{   let informacion2;
    function iniciar() {
        informacion2 = document.getElementById("informacion2");
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("comprobar").addEventListener("click",comprobar);
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "Escribe una fecha abajo. Puedes escribirla tanto en milisegundos como en formato mes/dia/año";
    }

    function esFecha(fecha){
        return isNaN(new Date(fecha))? false : true;
    }

    function comprobar(){
        if(esFecha(document.getElementById("fecha").value))
            informacion2.innerHTML = "Has introducido una fecha correcta";
        else
            informacion2.innerHTML = "No has introducido una fecha correcta";
    }

    window.addEventListener("load", iniciar);
}