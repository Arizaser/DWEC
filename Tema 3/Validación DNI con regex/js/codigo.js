/**
 * Realiza la comprobación del dni.
 * Para ello, crea un formulario con tres campos: nombre, dni y fecha de nacimiento.
 * Al perder el foco de la caja de texto del DNI se realizará la comprobación. Aparecerá un mensaje (Derecha o abajo) en rojo, indicando:
 *  formato incorrecto
 *  letra incorrecta
 *  introduce dni (si está vacío)
 * */

{   
    let regexNIF = new RegExp("^([\\d]{8})[-\\s]*([A-Z(^IÑOU)])$");
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    function iniciar() {
        document.getElementById("inputDNI").addEventListener("focusout",comprobarDNI);
    }

    function comprobarDNI(){
        let valorDNI = this.value.toUpperCase().trim();
        let mensaje = "";

        if(valorDNI.length == 0)
            mensaje = "Introduce DNI";
        else if (!regexNIF.test(valorDNI))
            mensaje = "Formato incorrecto";
        else{
            [,numeroDNI,letraDNI] = regexNIF.exec(valorDNI);
            if(letras[numeroDNI % 23] != letraDNI)
                mensaje = "Letra incorrecta"
        }
        document.getElementById("error").innerHTML = mensaje;
    }

    window.addEventListener("load", iniciar);
}