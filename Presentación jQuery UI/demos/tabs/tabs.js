{
    $(function () {
        //EJEMPLO 1
        $("#tabs").tabs({
            collapsible: true, //Permite que la tab pueda cerrarse y abrirse
            hide: { effect: "clip", duration: 800 }, //Permite añadir un efecto y una duración al cerrar la tab
            show: { effect: "blind", duration: 800 } //Permite añadir un efecto y una duración al mostrar la tab
        });

        //EJEMPLO 2
        $("#tabs2").tabs({
            event: "mouseover", //Añadimos que se pueda navegar por las tabs con solo pasar el ratón por encima

            //Usamos ajax para obtener datos
            beforeLoad: function (event, ui) {

                //Si la petición ajax falla insertamos en la tab "Error al carga el contenido de la tab".
                ui.jqXHR.fail(function () {
                    ui.panel.html("<p>Error al cargar el contenido de la tab</p>");
                });
              
                //Callback que se lanza cuando la petición ajax ha finalizado correctamente

                // ui.jqXHR.done(function () {
                //     console.log("cargada");
                // });
            },
        });

        //EJEMPLO 3
        let $tab3 = $("#tabs3").tabs({
            collapsible: true,
            hide: {
                effect: "clip",
                duration: 800
            },
            show: {
                effect: "blind",
                duration: 800
            },
            beforeLoad: function (event, ui) {
                ui.jqXHR.fail(function () {
                    ui.panel.html("<p>Error al cargar el contenido de la tab</p>");
                });
                // ui.jqXHR.done(function () {
                //     console.log("cargada");
                // });
            },
        });

        //Hacemos que las tabs puedan ser ordenables
        $tab3.find(".ui-tabs-nav").sortable({
            axis: "x", //Especificamos el eje donde la tab puede ser movida

            //Callback que se lanza cuando la tab ha acabado de ser movida

            // stop: function () {
            //     console.log("Movida")
            //     $tab3.tabs("refresh");
            // }
        });

    });
}