{

    $(function () {
        let datos;
        let items;
        let $mostrarAlumnos = $("#mostrarAlumnos");
        $("#inputNombre").on("input",function () {
            items = [];
            datos = $(this).val().trim();
            if(datos.length === 0){
                $mostrarAlumnos.hide();
                return;
            }
            
            if(!$mostrarAlumnos.is(":visible"))
                $mostrarAlumnos.show();

            $.get("http://cpd.iesgrancapitan.org:9119/~qaesjo/alumnos.php", {palabra : datos},
                function (data) {
                    $.each(JSON.parse(data), function (key , value) {
                        items.push("<p>" + value +"</p>");
                    });
                    $mostrarAlumnos.html(items.join(""));
                }
            
            );
        });
    });
}