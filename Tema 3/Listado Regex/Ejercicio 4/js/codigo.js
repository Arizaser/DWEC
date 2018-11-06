/**
 * En una expresión regular, indica la utilidad del campo .source. Diferencia con toString()
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = `
        Diferencia entre source y toString:<br/>
        .source -> Devuelve una cadena que contiene el texto de origen del objeto regexp, y no contiene las dos barras diagonales en ambos lados y ninguna bandera.<br/>
        .toString -> Devuelve una cadena que contiene el texto de origen del objeto regexp, con las dos barras diagonales en ambos lados y las bandera.<br/>`
    }

    window.addEventListener("load", iniciar);
}