/**
 *Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h" (usa timing events del objeto window)
 * */

{
    let reloj;
    function iniciar() {
        reloj = document.getElementById("reloj");
        setInterval(mostrarReloj,1000);
    }

    function mostrarReloj(){
        let date = new Date();
        let horas = new String(date.getHours());
        let minutos = new String(date.getMinutes());
        let segundos = new String(date.getSeconds());
        if (horas.length == 1) 
            horas = "0" + horas;
        if (minutos.length == 1) 
            minutos = "0" + minutos;
        if (segundos.length == 1) 
            segundos = "0" + segundos;

        reloj.innerHTML = horas + ":" + minutos + ":" + segundos+" h";
    }

    window.addEventListener("load", iniciar);
}