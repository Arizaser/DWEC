/**
 * Crea el método incrementaDias() que incremente/decremente los días indicados. 
 * Admitirá como primer argumento un entero positivo/negativo que represente el número de días. 
 * El resto de argumentos representarán una fecha, similar a los argumentos del constructor Date().
 * */

{   let informacion2;
    function iniciar() {
        informacion2 = document.getElementById("informacion2");
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("comprobar").addEventListener("click",calcular);
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "Introduce los dias a sumar(número positivo) o restar(número negativo) en la fecha que indiques";
    }

    function incrementaDias(dias, cadenaFecha){
        let fecha = new Date(cadenaFecha);
        if(isNaN(fecha))
            throw "El valor introducido no es una fecha";
        
        fecha.setDate(fecha.getDate() + parseInt(dias));
        return fecha;
    }

    function calcular(){
        try{
            informacion2.innerHTML = incrementaDias(
                document.getElementById("numeroDias").value,document.getElementById("fecha").value);
        }catch(e){
            informacion2.innerHTML = e;
        }
    }

    window.addEventListener("load", iniciar);
}