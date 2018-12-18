//@author: José Rafael Álvarez Espino.
{
    let expresiones = {
        nombre: [new RegExp("^[\\w]{1,}[ ]?[\\w]{1,}[ ]?[\\w]{1,}$"), "Error, debe contener al menos un nombre, por ejemplo: Antonio."],
        correo: [new RegExp("^[\\w]{1,}\@[\\w]{1,}\\.[\\w]{1,}$"), "Error, formato de correo correcto: antonio@gmail.com."],
        fecha: [new RegExp("^\\d{2}([\/])\\d{2}\\1\\d{4}$"), "Error, debe de ser en formato dd/mm/yyyy."],
        hora: [new RegExp("^\\d{2}[:]\\d{2}$"), "Error, debe de ser en formato 14:35."],
        noches: [new RegExp("^\\d{1,}$"), "Error, el número de noches no puede estar vacío."],
        personas: [new RegExp("\\d"), "Error, el número de personas no puede estar vacío."],
    };

    let validador = {
        validarExpresion(valor, expresion) {
            if (!expresiones[expresion][0].test(valor))
                return expresiones[expresion][1];
            return "";
        },
        validarFecha(valor) {
            if (!expresiones["fecha"][0].test(valor))
                return expresiones["fecha"][1];

            let [dia,mes,annio] = valor.split("/");
            if(dia > 31)
                return "Error, el día no puede ser mayor que 31."
            if(mes > 12)
                return "Error, el mes no puede ser mayor que 12.";
            let fechaIntroducida = new Date(mes+"/"+dia+"/"+annio);
            let fechaActual = new Date();
            if(fechaActual.getTime() > fechaIntroducida.getTime())
                return "La fecha no puede ser anterior o igual al día de hoy.";
            return "";
        }
    }

    let inputsErroneos = [];
    let inputsText;
    let spans;
    let spanErrorEdad;
    let checkBoxs;
    let informacionReserva;
    let mapSpans = new Map();


    function init() {
        inputsText = document.querySelectorAll('input[type="text"]');
        spans = document.getElementsByTagName("span");
        for (element of spans) {
            mapSpans.set(element.id, element);
        }
        for (element of inputsText) {
            element.addEventListener("blur", validar.bind(null, element, mapSpans.get("error" + element.id), element.getAttribute("expresion")));
        }
        document.getElementById("enviar").addEventListener("click", comprobarTodo);
        spanErrorEdad = document.getElementById("errorEdad");
        checkBoxs = document.querySelectorAll('input[type="checkbox"]');
        informacionReserva = document.getElementById("informacionReserva");
    }

    function validar(inputSeleccionado, errorSpan, expresionRegular) {
        if (inputSeleccionado.id == "fecha")
            errorSpan.textContent = validador.validarFecha(inputSeleccionado.value, expresionRegular);
        else 
            errorSpan.textContent = validador.validarExpresion(inputSeleccionado.value, expresionRegular);
        if (errorSpan.textContent !== "")
            inputsErroneos.push(inputSeleccionado);
    }

    function comprobarTodo(e) {
        e.preventDefault();
        inputsErroneos = [];
        for (element of inputsText) {
            validar(element, mapSpans.get("error" + element.id), element.getAttribute("expresion"));
        }
        if (inputsErroneos.length != 0)
            inputsErroneos[0].focus();
        else
            recogerDatos();
    }

    function recogerDatos() {
        let arrayValores = [];
        for (element of inputsText) {
            arrayValores.push(element.value);
        }
        let servicios = "";
        for (element of checkBoxs) {
            if (element.checked)
                servicios += element.name + " ";
        }
        arrayValores.push(servicios);
        spanErrorEdad.textContent = "";
        try{
            let edadCliente = document.querySelectorAll('input[type="radio"]:checked');
            arrayValores.push(edadCliente[0].getAttribute("edad"));
            crearReserva(arrayValores);
        }catch(e){
            spanErrorEdad.textContent = "Selecciona una edad"
        }
        
    }

    function crearReserva(arrayValores) {
        let reserva;
        try {
            reserva = new Reserva(arrayValores[0], arrayValores[1], arrayValores[2], arrayValores[3], arrayValores[4], arrayValores[5], arrayValores[6], arrayValores[7]);
            reserva.mostrar();
        } catch (e) {
            informacionReserva.textContent = e.message;
        }

    }

    window.addEventListener("load", init);
}