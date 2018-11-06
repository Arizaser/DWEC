/**
 * Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año
 * */

{   
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "Días que quedan para fin de año: "+calcularHastaFinDeAnno();
    }

    function calcularHastaFinDeAnno(){
        let annioActual = new Date().getFullYear();
        let fechaActual = new Date().getTime();
        let fechaFinDeAnnio = new Date(annioActual,11,31).getTime();
        let diferencia = fechaFinDeAnnio - fechaActual;
        return Math.round(diferencia/(1000*60*60*24));
    }

    window.addEventListener("load", iniciar);
}