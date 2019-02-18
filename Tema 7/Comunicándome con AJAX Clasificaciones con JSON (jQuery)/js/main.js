{

    $(function () {
        let xhttp;
        $elemento = null;
        $contenedorInformacion = $("#contenedorInformacion");
        let id;
        habilidades = new Map();
        $("button").click(function () {
            $elemento = $(this);
            $contenedorInformacion.empty();
            id = $elemento.prop("id");
            $.getJSON(id + ".json", function (data) {
                let items = [];
                let contador = 0;
                if (id === "desarrolladores")
                    items.push("<select id='selectDesarrolladores'>");
                else
                    items.push("<select>");
                items.push("<option selected disabled> Selecciona una opción</option>");
                $.each(data, function (key, value) {
                    items.push("<option value=" + (++contador) + ">" + key + "</option>");
                    habilidades.set(contador, value);
                });
                items.push("</select>");
                items.push("<p id='descripcion'></p>");


                $("<div>").html(items.join("")).appendTo($contenedorInformacion);
                $("select").change(function () {
                    if ($(this).prop("id") == "selectDesarrolladores") {
                        $("#descripcion").html(obtenerLenguajes($(this).val()));
                    } else
                        $("#descripcion").html(habilidades.get(parseInt($(this).val())));
                });
            });
            // xhttp = new XMLHttpRequest();
            // xhttp.onreadystatechange = function () {
            //     if (this.readyState == 4 && this.status == 200) {
            //         let items = [];
            //         if (!$elemento.hasClass("lista"))
            //             $.each(JSON.parse(xhttp.response), function (key, value) {
            //                 items.push("<div><h3>" + key + "</h3><p>" + value + "</p></div>");
            //             });
            //         else
            //             $.each(JSON.parse(xhttp.response), function (key, value) {
            //                 items.push("<li>" + key + " : " + value + "</li>");
            //             });


            //         $("<div>").html(items.join("")).appendTo($contenedorInformacion);
            //     }
            // };
            // xhttp.open("GET", $elemento.prop("id") + ".json", true);
            // xhttp.send();
        });

        function obtenerLenguajes(posicion) {
            let items = [];
            let array = habilidades.get(parseInt(posicion)).split(",");
            array.forEach(element => {
                items.push("<label for="+element+">"+element+"</label><input type='checkbox' id="+element+"><br>");
            });
            $("#descripcion").html(items.join(""));
        }

    });
}