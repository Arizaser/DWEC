{
    $(function(){
        $("a").each(function (i) {
            var titulo = $(this).attr("title");
            console.log("Atributo title del enlace " + i + ": " + titulo);
        });
    });
}