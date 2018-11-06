/**
 * Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo' del día actual o de la fecha indicada (similar al constructor).
 * */

{   

    let informacion2;
    let diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        document.getElementById("diaSeleccionado").addEventListener("click",calcular);
        document.getElementById("diaActual").addEventListener("click",calcular);
        informacion2 = document.getElementById("informacion2");
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML = "Selecciona una fecha o el día actual y te diré que día de la semana es.";
    }

    function calcular(){
        let valor = this.id;
        let diaSemana;
        try{
            if(valor == "diaSeleccionado")
                diaSemana = calcularDiaSemana(new Date(document.getElementById("fecha").value));
            else
                diaSemana= calcularDiaSemana(new Date());
            informacion2.innerHTML = "El día de la semana es: "+diaSemana;
        }catch(e){
            informacion2.innerHTML = e;
        }
        
    }

    function calcularDiaSemana(fecha){
        let diaDeLaSemana = diasDeLaSemana[fecha.getDay()];
        if(diaDeLaSemana == undefined)
            throw "No has introducido una fecha válida";
        return diaDeLaSemana;
    }


    window.addEventListener("load", iniciar);
}