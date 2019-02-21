{   

   

    //Al pulsar en div1 eliminamos de él la clase grande y añadimos la clase azul
    $(function () {
        $("#div1").click(function () {
            $(this).switchClass("grande","azul", 1000, "easeInBack");
        });
    });
}