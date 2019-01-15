{
    $(function () {
        let contenedor = $("#contenedor");
        contenedor.on("click",".verde",function(){
            let elem = $(this);
            if (elem.html()!="Hiciste clic!!"){
                elem.html("Hiciste clic!!");
            }else{
                elem.html("Hiciste de nuevo clic!!");
            }
        })
        
        $("#insertarelem").click(function(){
            let nuevoElemento = $('<div class="verde">Este elemento se ha creado e insertado dinamicamente (haz clic)</div>');
            nuevoElemento.appendTo(contenedor);
        });
        
        $("#ponerclaseverde").click(function(){
            $("#noverde").addClass("verde");
        });
    });
}