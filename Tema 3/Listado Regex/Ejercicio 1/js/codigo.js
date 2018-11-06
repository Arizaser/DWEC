/**
 * Indica las distintas formas de crear expresiones regulares.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        mostrarArray(document.getElementById("informacion2"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = `
        Formas de crear expresiones regulares: <br/>
        Mediante cadena -> let regex = "/hola/";<br/>
        Mediante new RegExp -> let regex = new RegExp("hola");<br/>
        `
    }

    window.addEventListener("load", iniciar);
}