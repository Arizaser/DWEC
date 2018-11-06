/**
 * Implementa el método esBisiesto() que devuelva si una fecha/año es bisiesto o no. En caso de que el argumento no sea una fecha, que salte una excepción. Admitirá tantos parámetros como el constructor Date(). Pruébalo con varias invocaciones fallidas (y capturadas)
 * */

{
    let informacion2;

    function iniciar() {
        informacion2 = document.getElementById("informacion2");
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("comprobar").addEventListener("click", comprobar);
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = "Escribe una fecha abajo en formato mes/dia/año o un año y te diré si es bisiesto";
    }

    function esBisiesto(cadenaFecha) {
        let fecha = new Date(cadenaFecha);
        if (isNaN(fecha))
            throw "El valor introducido no es una fecha válida";
        
        let annio = fecha.getFullYear();
        if(annio % 4 == 0 && annio % 100 != 0)
            return true;
        else if(annio % 400 == 0)
            return true;
        return false; 
    }

    function comprobar() {
        try {
            if(esBisiesto(document.getElementById("fecha").value))
                informacion2.innerHTML = "El año es bisiesto";
            else
                informacion2.innerHTML = "El año no es bisiesto";
        } catch (e) {
            informacion2.innerHTML = e;
        }
    }

    window.addEventListener("load", iniciar);
}