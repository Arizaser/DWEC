/**
 * Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento.  En caso de tener menos de un año, indicar días y meses transcurridos. Indicar errores.
 * */

{

    let regex = /^(\d{2}\/\d{2}\/\d{4})$/;
    let informacion2;

    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("calcular").addEventListener("click", comprobar);
        informacion2 = document.getElementById("informacion2");
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = "Escribe tu fecha de nacimiento en formato mes/dia/año (mm/dd/YYYY)";
    }

    function comprobar() {
        let fechaNacimiento = document.getElementById("fecha").value;
        try {
            mostrarEdad(calcularEdad(fechaNacimiento));
        } catch (e) {
            informacion2.innerHTML = e;
        }
    }

    function mostrarEdad(edad) {
        mensaje = "";
        if (Array.isArray(edad)) {
            meses = edad[0];
            dias = edad[1];
            if (meses == 0 && dias == 0)
                mensaje = "Felicidades, acabas de nacer.";
            else if (meses == 0 && dias == 1)
                mensaje = "Tienes " + dias + " día";
            else if (meses == 0 && dias > 1)
                mensaje = "Tienes " + dias + " días";
            else if (meses == 1 && dias == 0)
                mensaje = "Tienes " + mes + " mes";
            else if (meses == 1 && dias == 1)
                mensaje = "Tienes " + meses + " mes y " + dias + " día";
            else if (meses > 1 && dias == 1)
                mensaje = "Tienes " + meses + " meses y " + dias + " día";
            else if (meses == 1 && dias > 1)
                mensaje = "Tienes " + meses + " mes y " + dias + " días";
            else
                mensaje = "Tienes " + meses + " meses y " + dias + " días";
        } else {
            mensaje = (edad == 1)?"Tienes "+edad+" año":"Tienes "+edad+" años";
        }
        informacion2.innerHTML = mensaje;
    }

    function calcularEdad(fecha) {
        let hoy = new Date();
        let fechaNacimiento = new Date(Date.parse(fecha));
        if (isNaN(fechaNacimiento))
            throw "La fecha de nacimiento es incorrecta";
        else if (fechaNacimiento > hoy)
            throw "La fecha de nacimiento no puede ser posterior al día de hoy";
        let dia = hoy.getDate() - fechaNacimiento.getDate();
        let mes = hoy.getMonth() - fechaNacimiento.getMonth();
        let annios = hoy.getFullYear() - fechaNacimiento.getFullYear();

        if (mes < 0 || (mes == 0 && dia < 0))
            annios--;
        if (annios == 0) {
            let meses = (hoy.getFullYear() - fechaNacimiento.getFullYear()) * 12;
            meses -= fechaNacimiento.getMonth();
            meses += hoy.getMonth();

            if (hoy.getDate() < fechaNacimiento.getDate())
                meses--;

            fechaNacimiento.setMonth(fechaNacimiento.getMonth() + meses);
            let dias = (hoy.getTime() - fechaNacimiento.getTime()) / (1000 * 60 * 60 * 24);
            dias = Math.floor(dias);
            return [meses, dias];

        }
        return annios;
    }

    window.addEventListener("load", iniciar);
}