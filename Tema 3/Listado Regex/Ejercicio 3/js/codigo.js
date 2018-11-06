/**
 * En una expresión regular, indica la utilidad de los campos .flag .options ¿Funciona en todos los navegadores?
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = `
        Campos en flags y options: <br/>
        .flags -> Devuelve las banderas usadas en la expresion regular como g o i.<br/>
        .options -> No funciona<br/>
        `
    }

    window.addEventListener("load", iniciar);
}