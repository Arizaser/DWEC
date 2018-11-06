/**
 * Mediante ejemplos, indica valores y utilidad de lastMatch en una expresión regular. ¿Funciona en todos los navegadores?
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion){
        
        let expresion = /hola/g;
        expresion.test('hola mundo!');
        
        RegExp['$&'];  

        informacion.innerHTML = `
        lastMatch -> Es una propiedad estática que contiene la última coincidencia de carácteres. Se puede usar RegExp.lastMatch o
        RegExp['$&']<br/>
        Ejemplo: La expresión regular usada es /hola/g y la cadena es "hola mundo!".<br/>`;
        informacion.innerHTML +=  'Usando RegExp.lastMatch ->'+RegExp.lastMatch+'<br/>'; 
        informacion.innerHTML += ' Usando RegExp["$&"] -> '+RegExp["$&"];
           
    }

    window.addEventListener("load", iniciar);
}