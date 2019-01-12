$(function () {
    $("#mayoria_edad").click(function () {
        if ($("#mayoria_edad").prop("checked")) {
            $("#formulariomayores").show('fadein');
        } else {
            $("#formulariomayores").hide('fadeout');
        }
    });
});