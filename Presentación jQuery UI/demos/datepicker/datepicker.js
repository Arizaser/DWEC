{

    //Ajustes para establecer datepicker al idioma español.
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $(function () {

        //Establecemos los ajutes al idioma español creado arriba.
        $.datepicker.setDefaults($.datepicker.regional['es']);


        //EJEMPLO 1
        let $datepicker1 = $("#datepicker1");
        $datepicker1.datepicker({
            showOtherMonths: true, //Muestra los días de otros meses
            selectOtherMonths: true, //Permite seleccionar los días de otros meses, siempre que la propiedad "showOtherMonths" esté activa.
        });

        //Establecemos un evento cuando el datepicker cambie donde le añadimos un showAnim elegido en el select.
        $("#animacion").on("change", function () {
            $datepicker1.datepicker("option", "showAnim", $(this).val());
        });

        //EJEMPLO 2
        $("#datepicker2").datepicker({
            numberOfMonths: 2, //Permite establecer el número de meses a mostrar en el datepicker.
            showButtonPanel: true //Muestra los botones hoy y cerrar en el datepicker.
        });

        let dateFormat = "dd/mm/yy";
        let $desde = $("#desde").datepicker({
            changeMonth: true, //Permite cambiar el mes.
            numberOfMonths: 2
        }).on("change", function () {
            $hasta.datepicker("option", "minDate", getDate(this)); //Añadimos una fecha mínima seleccionable al datepicker la cual será la fecha del datepicker1
        });
        let $hasta = $("#hasta").datepicker({
                changeMonth: true,
                numberOfMonths: 2
            })
            .on("change", function () {
                $desde.datepicker("option", "maxDate", getDate(this)); //Añadimos una fecha máxima seleccionable al datepicker la cual será la fecha del datepicker1
            });

        //EJEMPLO 3

        let $desde2 = $("#desde2").datepicker({
            changeMonth: true,
            numberOfMonths: 2,
            showAnim: "slide",
            //Con la callback onClose hacemos que el datepicker hasta2 se muestre cuando el datepicker2 se cierre.
            onClose: function () {
                $hasta2.datepicker("show");
            }
        }).on("change", function () {
            $hasta2.datepicker("option", "minDate", getDate(this));

        });
        let $hasta2 = $("#hasta2").datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 2,
                showAnim: "slide"
            })
            .on("change", function () {
                $desde2.datepicker("option", "maxDate", getDate(this));
            });

        /**
         * Crea una fecha válida para el datepicker
         * @param fecha: Fecha que le pasamos a convertir.
         */
        function getDate(fecha) {
            let date;
            try {
                date = $.datepicker.parseDate(dateFormat, fecha.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    });
}