/**
 * En una expresión regular, indica la utilidad del campo .global. Indica otros métodos relacionados,
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = `
        Campos en regex: <br/>
        .global -> Prueba la expresión regular contra todas las posibles coincidencias en una cadena, o solo contra la primera.<br/>
        .ignoreCase -> Ignora las mayúsculas y minúsculas.<br/>
        .multiline -> Busca en cadenas a través de múltiples líneas.<br/>
        `
    }

    window.addEventListener("load", iniciar);
}