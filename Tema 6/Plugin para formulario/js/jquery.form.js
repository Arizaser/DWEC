(function ($) {

  let patrones = {
    nombre: [/([a-zA-Z]{3,}\s?){1,3}/, "Mínimo un nombre de tres caracteres."],
    apellidos: [/([a-zA-Z]{3,}\s?){1,3}/, "Mínimo un apellido de tres caracteres."],
    email: [/^[\w]{2,}\.?[\w]*@{1}[\w]+[\.\w]/i, "Formato correo no válido."],
    mensaje: [/(\w){10,}/, "Mínimo 10 caracteres."]
  }

  let tester = {
    validar (texto, patron) {
      return patrones[patron][0].test(texto);
    }
  }

  $.fn.validar = function (estilos2) {
    let estilos = {
      color: "#ff0000",
      "background-color": "#ffDEDE",
      border: "2px solid #ffD3D7"
    };

    $.extend(estilos, estilos2);

    let $inputs = $(":input[type='text'],textarea",$(this));
    let inputsErroneos = [];
    let $inputActual;
    let patron;

    $inputs.blur(function () {
      $inputActual = $(this);
      patron = $inputActual.attr("tipo");
      if (!tester.validar($inputActual.val(),patron)) {
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
        color: "initial",
        background: "initial",
        border: "initial"
      });

    });

    $(this).submit(function (event) {
      event.preventDefault();
      inputsErroneos = [];
      $inputs.blur();
      if (inputsErroneos.length !== 0)
        inputsErroneos[0].focus();
      else
        enviarFormulario();
    });

    function enviarFormulario() {
      $.ajax({
        url: "https://alesjora.github.io/temas/tema6/pluginParaFormulario/fichero.txt",
        success: function (response) {
          $("#mensaje").val(response);
        },
        fail: function () {  
          console.log("error");
        }
      });
    }

    return this;
  }
}(jQuery));