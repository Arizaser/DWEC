{
    let $checkboxs
    let $radioSeleccionado;
    let $informacion1
    $(function () {
        $informacion1 = $("#informacion1");
        let coordenadas = $("#coordenadas");
        $(document).mousemove(function(e){
            coordenadas.html("X: " + e.pageX + " - Y: " + e.pageY + " timeStamp: "+e.timeStamp)
        });
        $checkboxs = $(":checkbox");
        $checkboxs.click(deshabilitarCheckBox);
        $( "#ejemploOn" ).on( "mouseenter click", function() {
            console.log("A este mensaje me refería.");
        });
        $(":radio").click(mostrarInformacionRadioButton);
    });

    function deshabilitarCheckBox(e){
        $checkboxs.each(function (){
            if (e.currentTarget.id != $(this).prop("id"))
                $(this).prop("checked", false);
        });
    }

    function mostrarInformacionRadioButton(){
        $radioSeleccionado = $(":checked");
        $informacion1.html("Radiobutton seleccionado mediante :checked -> "+$radioSeleccionado.prop("id"));
    }
}