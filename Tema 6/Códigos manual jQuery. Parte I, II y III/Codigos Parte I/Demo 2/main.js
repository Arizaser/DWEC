$(function () {
    $("#capa").mouseenter(function(){
        $("#mensaje").show('fadein');
    });
    $("#capa").mouseleave(function(){
        $("#mensaje").hide('fadeout');
    });
})