{

    $(function () {
        let xhttp;
        $elemento = null;
        $contenedorInformacion = $("#contenedorInformacion");
        $("button").click(function () {
            $elemento = $(this);
            $contenedorInformacion.empty();
            $.getJSON($elemento.prop("id") + ".json", function (data) {
                let items = [];
                if (!$elemento.hasClass("lista"))
                    $.each(data, function (key, value) {
                        items.push("<div><h3>" + key + "</h3><p>" + value + "</p></div>");
                    });
                else
                    $.each(data, function (key, value) {
                        items.push("<li>" + key + " : " + value + "</li>");
                    });


                $("<div>").html(items.join("")).appendTo($contenedorInformacion);
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
    });
}