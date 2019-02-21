/**
 * @author Mario Navarro Madrid
 */

$(function () {

    //Objeto creado para cambiar los iconos del accordion
    const icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };

    // Objeto con las opciones para el accordion, para verlas todos consultar la api: http://api.jqueryui.com/accordion/
    const options = {
        //Animación al expandirse y contraerse
        animate: "easeOutBounce",
        //Permitir que se puedan contraer todos los elementos del accordion
        collapsible: true,
        //Iconos
        icons : icons,
        //Expandir y contrae a través de un eventp
        event: "mouseover",
        //Establece la altura de cada elemento del accordion
        heightStyle: "content",
        //Desactivar el accordion
        //disabled : true
        //Seleccionamos el elemento que aparecerá abierto el entrar al sitio
        active: 2
    }

    //Aplicamos al accordion a un elemento jQuery y le pasamos las opciones con el objeto creado anteriormente.
    $("#accordion").accordion(options);

    //Tambien se puede crear así
    /*$("#accordion").accordion({
        animate: "easeOutBounce",
        collapsible: true,
        icons : icons,
        event: "mouseover",
        heightStyle: "content",
        //disabled : true
        active: 2
    });*/

});