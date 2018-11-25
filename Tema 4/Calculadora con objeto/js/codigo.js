/**
 * Script calculadora
 * Autor: José Rafael Álvarez Espino
 */

/**
 * Calculadora
 * */

{
    let calculadora = {
        botones: ['CE', 'DEL', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '/', '0', '+/-', ',', '='],
        inputMuestra: 0,
        valor1: 0,
        valor2: 0,
        sumar: false,
        restar: false,
        multiplicar: false,
        dividir: false,
        porcentaje: false,
        nuevoValor: false,
        realizarOperacion: false,
        operacionActual: false,
        operacionPosterior: false,
        primerNumero: true,
        crearCalculadora() {
            calculadora.crearDivPadre();
            calculadora.crearBotones(calculadora.botones);
            inputMuestra = document.getElementById("inputMuestra");
            let inputs = document.getElementsByTagName("input");
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener("click", calculadora.comportamiento);
            }
        },
        crearDivPadre() {
            let div = document.createElement('div');
            div.id = 'divPadre';
            div.style.backgroundColor = '#F57054'
            div.style.width = '245px';
            document.body.appendChild(div);
        },
        crearBotones(botones) {
            let input;
            let divPadre = document.getElementById('divPadre');
            let inputText = document.createElement('input');
            inputText.type = 'text';
            inputText.id = 'inputMuestra';
            inputText.style.width = '226px';
            inputText.style.height = '30px';
            inputText.style.margin = '5px';
            inputText.value = "0";
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
        },
        comportamiento() {
            let valor = this.value;
            if(inputMuestra.value == "Error" && this.value != "CE")
                return;
            switch (valor) {
                case "0":
                    if (calculadora.nuevoValor) {
                        inputMuestra.value = valor;
                        calculadora.nuevoValor = false;
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
                    if (inputMuestra.value == 0 && inputMuestra.value.length <= 1 || calculadora.nuevoValor)
                        inputMuestra.value = valor;
                    else
                        inputMuestra.value += valor;
                    calculadora.nuevoValor = false;
                    break;
                case "+/-":
                    if (inputMuestra.value > 0)
                        inputMuestra.value = -Math.abs(inputMuestra.value);
                    else
                        inputMuestra.value = Math.abs(inputMuestra.value);
                    break;
                case "DEL":
                    inputMuestra.value = inputMuestra.value.substring(0, inputMuestra.value.length - 1);
                    if (inputMuestra.value == "")
                        inputMuestra.value = "0";


                    break;
                case ",":
                    if (!inputMuestra.value.includes("."))
                        inputMuestra.value += ".";
                    break;
                case "CE":
                    inputMuestra.value = 0;
                    calculadora.valor1 = 0;
                    calculadora.valor2 = 0;
                    calculadora.resetearOperadores();
                    calculadora.operacionActual = false;
                    calculadora.operacionPosterior = false;
                    calculadora.primerNumero = true;
                    break;
                case "+":
                case "-":
                case "X":
                case "/":
                case "%":
                    if (calculadora.primerNumero) {
                        calculadora.valor1 = inputMuestra.value;
                        calculadora.operacionPosterior = valor;
                        console.log(calculadora.primerNumero);
                        calculadora.primerNumero = false;
                    } else {
                        calculadora.valor2 = inputMuestra.value;
                        calculadora.realizarOperacion = true;
                        calculadora.operacionActual = calculadora.operacionPosterior;
                        calculadora.operacionPosterior = valor;
                    }
                    calculadora.asignarOperaciones(calculadora.operacionActual);
                    if (calculadora.realizarOperacion && !calculadora.nuevoValor)
                        calculadora.comprobarOperacion(inputMuestra.value);
                    calculadora.nuevoValor = true;
                    break;
                case "=":
                    if (calculadora.operacionActual == false && calculadora.operacionPosterior != "+" || calculadora.operacionPosterior != "-" || calculadora.operacionPosterior != "X" || calculadora.operacionPosterior != "/")
                        calculadora.asignarOperaciones(calculadora.operacionPosterior);
                    calculadora.comprobarOperacion(inputMuestra.value);
                    calculadora.nuevoValor = true;
                    break;
            }
        },
        comprobarOperacion(valor) {
            if (calculadora.sumar || calculadora.restar || calculadora.multiplicar || calculadora.dividir || calculadora.porcentaje) {
                calculadora.valor2 = valor;
                calculadora.calcularOperacion();
            }
        },
        resetearOperadores() {
            calculadora.sumar = false;
            calculadora.restar = false;
            calculadora.multiplicar = false;
            calculadora.dividir = false;
            calculadora.porcentaje = false;
        },
        asignarOperaciones(valor) {
            calculadora.resetearOperadores();
            switch (valor) {
                case "+":
                    calculadora.sumar = true;
                    break;
                case "-":
                    calculadora.restar = true;
                    break;
                case "X":
                    calculadora.multiplicar = true;
                    break;
                case "/":
                    calculadora.dividir = true;
                    break;
                case "%":
                    calculadora.porcentaje = true;
                    break;
            }
        },
        calcularOperacion() {
            if (calculadora.sumar) {
                inputMuestra.value = parseFloat(calculadora.valor1) + parseFloat(calculadora.valor2);
            } else if (calculadora.restar) {
                inputMuestra.value = parseFloat(calculadora.valor1) - parseFloat(calculadora.valor2);
            } else if (calculadora.multiplicar) {
                inputMuestra.value = parseFloat(calculadora.valor1) * parseFloat(calculadora.valor2);
            } else if (calculadora.dividir) {
                inputMuestra.value = parseFloat(calculadora.valor1) / parseFloat(calculadora.valor2);
            } else {
                inputMuestra.value = (parseFloat(calculadora.valor1) * parseFloat(calculadora.valor2)) / 100;
            }
            calculadora.valor1 = inputMuestra.value;
            calculadora.valor2 = 0;
            if(hayErrorResultado())
                inputMuestra.value = "Error";
        }
    }
    
    function hayErrorResultado(){
        return inputMuestra.value == "Infinity" || inputMuestra.value == "NaN";
    }

    function iniciar() {
        calculadora.crearCalculadora();
    }

    window.addEventListener("load", iniciar);
}