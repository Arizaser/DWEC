(function ($) {

  let patrones = {
    nombre: [/([a-zA-Z]{3,}\s?){1,3}/, "Mínimo un nombre de tres caracteres."],
    apellidos: [/([a-zA-Z]{3,}\s?){1,3}/, "Mínimo un apellido de tres caracteres."],
    email: [/^[\w]+@{1}[\w]+\.[a-z]{2,}/i, "Formato correo no válido."],
    mensaje: [/(\w){10,}/, "Mínimo 10 caracteres."]
  }

  $.fn.validar = function (estilos2) {
    let estilos = {
      color: "#ff0000",
      backgroundcolor: "#ffDEDE",
      border: "2px solid #ffD3D7"
    };

    $.extend(estilos, estilos2);

    let $inputs = $(":input").not(":submit");
    let inputsErroneos = [];
    let $inputActual;
    let patron;

    $inputs.blur(function () {
      $inputActual = $(this);
      patron = $inputActual.attr("tipo");
      if (!patrones[patron][0].test($inputActual.val())) {
        $(this).css(estilos);
        inputsErroneos.push($inputActual);
      } else {
        $inputActual = $(this);
        $inputActual.css({
          color: "green",
          background: "",
          border: "2px solid green"
        });
      }
    });

    $inputs.focus(function () {
      $(this).css({
        color: "",
        background: "",
        border: "1px solid black"
      });

    });
    $(this).submit(function (event) {
      event.preventDefault();
      inputsErroneos = [];
      $inputs.blur();
      if(inputsErroneos.size !== 0)
        inputsErroneos[0].focus();
    });

    return this;
  }
}(jQuery));