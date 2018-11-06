/**
 * Mediante ejemplos, indica valores y utilidad de index y lastIndex en una expresión regular. ¿Funciona en todos los navegadores?
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        
        informacion.innerHTML = `
        Diferencia entre index y lastIndex:<br/>
        .index -> No funciona<br/>
        .lastIndex -> Es una propiedad entera que especifica el índice en el que se inicia la siguiente coincidencia.<br/>`
        let regex = new RegExp( "foo", "g" );
        let cadena = 'table football, foosball';
        regex.test(cadena);
        console.log(regex.lastIndex);
        regex.test(cadena);
        console.log(regex.lastIndex);
    }

    window.addEventListener("load", iniciar);
}