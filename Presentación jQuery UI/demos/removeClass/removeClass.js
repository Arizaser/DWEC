{   

    //https://matthewlein.com/tools/jquery-easing web interesante.

    
    $(function () {
        //Al hacer click en div1 removemos la clase demo1
        $("#div1").click(function () {
            $(this).removeClass("demo1", 1000, "easeInBack");
        });

        //Al hacer click en div2 removemos la clase demo1 y al finalizar añadimos la clase demo1 de nuevo al div2
        $("#div2").click(function () {
            $(this).removeClass("demo1", 1000, "easeInBack", function () {
                $(this).addClass("demo1",1000, "easeInBack");
            });
        });
    });
}