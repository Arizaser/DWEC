$(function () {
    $("a").mouseover(function () {
        $("#capa").addClass("clasecss");
    });
    $("a").mouseout(function () {
        $("#capa").removeClass("clasecss");
    });
});