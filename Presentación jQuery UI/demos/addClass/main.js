/**
 * @author Mario Navarro Madrid
 */

$(function () {
    $("button").on("click", function () {

        //Objeto creado para las opciones de la animación
        const options = {
            //Duracin animación
            duration: 1000,
            //Tipo de animación, para verlas todos consultar la API de Easing
            easing: "easeInBounce"
            //Callback para cuando se complete la animación
            complete: callback,
            //Defininimos si queremos que se aplique a elementos hijos la animación
            //children: false, // por defecto
            //Definimos si queremos que permite la cola de animacioones
            //queue: true // por defecto
        }

        //Se puede realizar de estas tres formas
        //$( "#effect" ).addClass( "newClass", 1000,"easeInBounce");
        //$("#effect").addClass("newClass", 1000, "easeInBounce", callback);
        $( "#effect" ).addClass( "newClass",options);
    });

    function callback() {
        $("#effect").removeClass("newClass", 1000, "easeInBounce");
    }
});