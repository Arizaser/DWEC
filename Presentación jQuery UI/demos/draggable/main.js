/**
 * @author Mario Navarro Madrid 
 */

$(function () {

    /**
     * Objeto para las opciones del elemento draggable
     */
    const options = {
        //Limitar que solo se mueva en el eje y o x
        //axis: "y",
        //Tipo de cursor mientras se arrastra
        cursor: "move",
        //Retraso en milisegundos al arrastrar
        //delay: 200
        //Permitir que el elemento arrastrado se acople a otro
        //snap: true
        //Permitir que el elemento se mueva en base a una cuadrilla
        //grid: [ 20, 20 ]
        //Posición del cursor al arrastrar
        cursorAt: {
            top: 0,
            left: 0
        },
        //El elemento vuelve a su posición original al soltar el lick
        //revert: true
        //Tiempo en milisegundos que tarda el elemento en volver a su posición original
        //revertDuration: 200
        //Muestra el elemento mientras se arrasta además de quedar en su posición original
        helper: "clone"
    }

    //Hacer el elemento draggable
    //$("#draggable").draggable();
    $("#draggable").draggable(options);
    $("#draggable2").draggable({
        //Limita su desplazamiento a la clase indicada
        containment: "#containment-wrapper",
    });
    $("#draggable3").draggable({
        //Limita su desplazamiento al elemento padre
        containment: "parent"
    }, );
    $("#draggable4").draggable({
        //Permite arrastrar el elemento a través del elemento indicado, en este caso un párrafo
        handle: "p"
    });
    $("#draggable5").draggable({
        //No permite arrastrar el elemento a través de un elemento que lo contenga
        cancel: "p.ui-widget-header"
    });
    
    $("div, p").disableSelection();




});