/**
 * Indica el formato del parámetro cadena del método Date.parse().
 * */

{   
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "El método parse Transforma una cadena con la representación de una fecha y hora, y devuelve el número de milisegundos desde las 00:00:00 del 1 de enero de 1970, hora local.<br/>";
        informacion.innerHTML += "El formato del parámetro puede ser: mes/dia/año (11/5/2018), mes-dia-año (11-5-2018), mes dia año (11 5 2018), mes dia, año (nov 5, 2018)<br/>";
    }

    window.addEventListener("load", iniciar);
}