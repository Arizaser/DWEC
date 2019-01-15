{
    let numDobleClics = 0;
    let numClics = 0;
    $(function () {
        $("#micapa").dblclick(function () {
            numDobleClics++;
            $("#mensaje").html("Has hecho doble-clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
        });
        $("#micapa").click(function () {
            numClics++;
            $("#mensaje").html("Has hecho clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
        });
    });
}