/**
 * Script calculadora
 * Autor: José Rafael Álvarez Espino
 */

/**
 * Calculadora
 * */

{
    let inputMuestra;
    let valor1, valor2;
    let sumar, restar, multiplicar, dividir, porcentaje, nuevoValor, realizarOperacion;
    let operacionActual = false;
    let operacionPosterior = false;
    let primerNumero = true;


    function iniciar() {
        let botones = ['CE', 'DEL', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '/', '0', '+/-', ',', '='];
        crearDivPadre();
        crearBotones(botones);
        inputMuestra = document.getElementById("inputMuestra");
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("click", comportamiento);
        }
    }

    function comportamiento() {
        let valor = this.value;
        switch (valor) {
            case "0":
                if (nuevoValor) {
                    inputMuestra.value = valor;
                    nuevoValor = false;
                } else if (inputMuestra.value != 0 || inputMuestra.value.length == 0 || inputMuestra.value.includes("."))
                    inputMuestra.value += valor;
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (inputMuestra.value == 0 && inputMuestra.value.length <= 1 || nuevoValor)
                    inputMuestra.value = valor;
                else
                    inputMuestra.value += valor;
                nuevoValor = false;
                break;
            case "+/-":
                if (inputMuestra.value > 0)
                    inputMuestra.value = -Math.abs(inputMuestra.value);
                else
                    inputMuestra.value = Math.abs(inputMuestra.value);
                break;
            case "DEL":
                inputMuestra.value = inputMuestra.value.substring(0, inputMuestra.value.length - 1);
                break;
            case ",":
                if (!inputMuestra.value.includes("."))
                    inputMuestra.value += ".";
                break;
            case "CE":
                inputMuestra.value = 0;
                valor1 = 0;
                valor2 = 0;
                resetearOperadores();
                operacionActual = false;
                operacionPosterior = false;
                primerNumero = true;
                break;
            case "+":
            case "-":
            case "X":
            case "/":
            case "%":
                if(primerNumero){
                    valor1 = inputMuestra.value;
                    operacionPosterior = valor;
                    primerNumero = false;
                }
                else{
                    valor2 = inputMuestra.value;
                    realizarOperacion = true;
                    operacionActual = operacionPosterior;
                    operacionPosterior = valor;
                }     
                asignarOperaciones(operacionActual);
                if(realizarOperacion && !nuevoValor)
                    comprobarOperacion(inputMuestra.value);
                nuevoValor = true;
            break;
            case "=":
                if(operacionActual == false && operacionPosterior != "+" || operacionPosterior != "-" || operacionPosterior != "X" || operacionPosterior != "/")
                    asignarOperaciones(operacionPosterior);
                comprobarOperacion(inputMuestra.value);
                nuevoValor = true;
                break;
        }
    }

    function comprobarOperacion(valor){
        if (sumar || restar || multiplicar || dividir || porcentaje) {
            valor2 = valor;
            calcularOperacion();
        }
    }
    function resetearOperadores(){
        sumar = false;
        restar = false;
        multiplicar = false;
        dividir = false;
        porcentaje = false;
    }
    function asignarOperaciones(valor){
        resetearOperadores();
        switch(valor){
            case "+":
                sumar = true;
                break;
            case "-":
                restar = true;
                break;
            case "X":
                multiplicar = true;
                break;
            case "/":
                dividir = true;
                break;
            case "%":
                porcentaje = true;
                break;
        }
    }

    function calcularOperacion() {
        if (sumar) {
            inputMuestra.value = parseFloat(valor1) + parseFloat(valor2);
        } else if (restar) {
            inputMuestra.value = parseFloat(valor1) - parseFloat(valor2);
        } else if (multiplicar) {
            inputMuestra.value = parseFloat(valor1) * parseFloat(valor2);
        } else if(dividir){
            inputMuestra.value = parseFloat(valor1) / parseFloat(valor2);
        } else {
            inputMuestra.value = (parseFloat(valor1) * parseFloat(valor2))/ 100;
        }
        valor1 = inputMuestra.value;
        valor2 = 0;
    }

    function crearBotones(botones) {
        let input;
        let divPadre = document.getElementById('divPadre');
        let inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.id = 'inputMuestra';
        inputText.style.width = '226px';
        inputText.style.height = '30px';
        inputText.style.margin = '5px';
        inputText.style.textAlign = 'right';
        divPadre.appendChild(inputText);
        divPadre.appendChild(document.createElement('br'));
        for (let i = 1; i <= botones.length; i++) {
            input = document.createElement('input');
            input.type = 'button';
            input.value = botones[i - 1];
            input.id = botones[i - 1];
            input.style.height = '50px';
            input.style.width = '50px';
            input.style.margin = '5px';
            input.style.borderRadius = '5px';
            divPadre.appendChild(input);
            if (i % 4 == 0)
                divPadre.appendChild(document.createElement('br'));
        }
    }

    function crearDivPadre() {
        let div = document.createElement('div');
        div.id = 'divPadre';
        div.style.backgroundColor = '#F57054'
        div.style.width = '245px';
        document.body.appendChild(div);
    }

    window.addEventListener("load", iniciar);
}