{
    $(function () {
        $(document).mousemove(function(e){
            $("h1").html("X: " + e.pageX + " - Y: " + e.pageY)
        });
    });
}