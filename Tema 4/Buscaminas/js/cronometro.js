let horas = "0";
let minutos = "0";
let segundos = "0";
let cronometro;


function mostrarReloj() {

    if (segundos == 59) {
        segundos = -1;
        minutos = parseInt(minutos) + 1;
    }
    if (minutos == 59) {
        minutos = -1;
        horas = parseInt(horas) + 1;
    }

    segundos = (parseInt(segundos) + 1).toString();

    minutos = minutos.toString();
    horas = horas.toString();

    if (segundos.length == 1)
        segundos = 0 + "" + segundos;
    if (minutos.length == 1)
        minutos = 0 + "" + minutos;
    if (horas.length == 1)
        horas = 0 + "" + horas;

    cronometro.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function resetearCronometro(){
    horas = "00";
    minutos = "00";
    segundos = "00";
    cronometro.innerHTML = horas + ":" + minutos + ":" + segundos;
}
function pararCronometroSiEstaActivo() {
    if (buscaminas.cronometro != null) {
        clearInterval(buscaminas.cronometro);
        buscaminas.cronometro = null;
    }
}