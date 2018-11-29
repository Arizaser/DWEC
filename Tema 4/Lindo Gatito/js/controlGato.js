{
    let peso;
    let informacionActual;
    let imagenGato;
    function init(){
        peso = document.getElementById("peso");
        informacionActual = document.getElementById("informacionActual");
        imagenGato = document.getElementById("imagenGato");
        asignarInformacionGato();
        document.getElementById("jugar").addEventListener("click",jugar);
        document.getElementById("comer").addEventListener("click",comer);
        document.getElementById("dormir").addEventListener("click",dormir);
    }

    function jugar(){
        try{
            gato.jugar();
            actualizarCampos("\u00A1Qu\u00E9 divertido es jugar!","images/jugando.gif");
        } catch(e){
            actualizarCampos(e.message,"images/muerto.jpg");
        }
    }

    function comer(){
        try{
            gato.comer();
            actualizarCampos("\u00A1\u00D1am \u00F1am, que rico est\u00E1 esto!","images/comiendo.gif");
        } catch(e){
            actualizarCampos(e.message,"images/muerto.jpg");
        }
    }

    function dormir(){
        try{
            actualizarCampos(gato.dormir(),"images/durmiendo.gif");
        } catch(e){
            actualizarCampos(e.message,"images/muerto.jpg");
        }
    }

    function actualizarCampos(mensaje, rutaImagen){
        informacionActual.textContent = mensaje;
        imagenGato.src = rutaImagen;
        asignarPeso();
    }

    function asignarPeso(){
        peso.textContent = "Peso: "+gato.peso +" kg";
    }

    function asignarInformacionGato(){
        document.getElementById("nombre").textContent += gato.nombre;
        document.getElementById("fechaDeNacimiento").textContent += gato.getFechaNacimiento();
        mostrarEdad();
        document.getElementById("raza").textContent += gato.raza;
        asignarPeso();
    }

    function mostrarEdad(){
        mensaje = "";
        let edad = gato.calcularEdad();
        if (Array.isArray(edad)) {
            meses = edad[0];
            dias = edad[1];
            if (meses == 0 && dias == 0)
                mensaje = "Reci\u00E9n nacido.";
            else if (meses == 0 && dias == 1)
                mensaje = dias + " d\u00EDa";
            else if (meses == 0 && dias > 1)
                mensaje = dias + " d\u00EDas";
            else if (meses == 1 && dias == 0)
                mensaje = mes + " mes";
            else if (meses == 1 && dias == 1)
                mensaje = meses + " mes y " + dias + " d\u00EDa";
            else if (meses > 1 && dias == 1)
                mensaje = meses + " meses y " + dias + " d\u00EDa";
            else if (meses == 1 && dias > 1)
                mensaje = meses + " mes y " + dias + " d\u00EDas";
            else
                mensaje = meses + " meses y " + dias + " d\u00EDas";
        } else {
            mensaje = (edad == 1)?edad+" a\u00F1o":edad+" a\u00F1os";
        }
        document.getElementById("edad").textContent += mensaje;
    }


    window.addEventListener("load",init);
}