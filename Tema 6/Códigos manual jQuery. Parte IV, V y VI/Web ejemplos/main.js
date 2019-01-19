{
    let $checkboxs
    let $radioSeleccionado;
    let $informacion1
    $(function () {
        $informacion1 = $("#informacion1");
        let coordenadas = $("#coordenadas");
        $(document).mousemove(function (e) {
            coordenadas.html("X: " + e.pageX + " - Y: " + e.pageY + " timeStamp: " + e.timeStamp)
        });
        $checkboxs = $(":checkbox");
        $checkboxs.change(deshabilitarCheckBox);
        $("#ejemploOn").on("mouseenter click", function () {
            console.log("A este mensaje me refería.");
        });
        $(":radio").click(mostrarInformacionRadioButton);
    });

    function deshabilitarCheckBox(e) {
        if ($(this).prop("checked"))
            $checkboxs.not(":checked").prop("disabled", true);
        else
            $checkboxs.not(":checked").prop("disabled", false);
    }

    function mostrarInformacionRadioButton() {
        $radioSeleccionado = $(":checked");
        $informacion1.html("Radiobutton seleccionado mediante :checked -> " + $radioSeleccionado.prop("id"));
    }
}