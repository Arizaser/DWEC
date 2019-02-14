{

    $(function () {
        let $inputRuta = $("#inputRuta");
        let ruta;
        let $muestraEstados = $("#muestraEstados");
        let $muestraFichero = $("#muestraFichero");
        let estados;
        $("#cargarArchivo").click(function () {
            estados = ""
            $muestraEstados.html("");
            $muestraFichero.text("");
            ruta = $inputRuta.val();
            $("#muestraEstados").html("asdfasdf");
            $.ajax({
                method: "GET",
                url: ruta,
                beforeSend: function () {
                    estados += "<p>beforeSend " + getHora() + "</p>";
                },
                complete: function () {

                    estados += "<p>complete " + getHora() + "</p>";
                    $muestraEstados.html(estados);
                },
                success: function (data) {
                    $muestraFichero.text(data);
                    estados += "<p>success " + getHora() + "</p>";
                },
                error: function () {
                    estados += "<p>error " + getHora() + "</p>";
                }
            });
        });



    });

    function getHora() {
        let fecha = new Date();
        return fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + ":" + fecha.getMilliseconds();
    }
}