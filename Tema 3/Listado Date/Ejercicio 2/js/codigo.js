/**
 * Indica la utilidad de Date.now().
 * */

{   
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "El método now devuelve los milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970 justo hasta ahora como un Number.<br/>";
        informacion.innerHTML += "Ejemplo método now: "+Date.now()+"<br/>";
    }

    window.addEventListener("load", iniciar);
}