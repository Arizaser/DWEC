{
    let contenedorBuscaminas;

    function init() {
        reloj = document.getElementById("reloj");
        let botones = document.getElementsByTagName("button");
        contenedorBuscaminas = document.getElementById("contenedorBuscaminas");
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", calcularValores);
        }
       // document.addEventListener("contextmenu", function () {
         //   return false
        //});
        document.oncontextmenu = function(){return false};

    }

    function calcularValores() {
        eliminarTableroSiExiste();
        switch (this.id) {
            case "facil":
                crearPartida(8, 8, 10);
                break;
            case "intermedio":
                crearPartida(16, 16, 40);
                break;
            default:
                crearPartida(16, 30, 99);
                break;
        }
    }

    function eliminarTableroSiExiste() {
        let tablero = document.getElementById("tablero");
        let parrafoFinal = document.getElementById("parrafoFinal");
        if (tablero)
            contenedorBuscaminas.removeChild(tablero);
        if (parrafoFinal)
            contenedorBuscaminas.removeChild(parrafoFinal);
    }

    function crearPartida(filas, columnas, minas) {
        if (!cronometro)
            crearCronometro();
        buscaminas.crearMarcadorBanderas();
        buscaminas.inicializar(filas, columnas, minas);
        buscaminas.crearTableroGrafico();
        buscaminas.crearTableroArray();
        buscaminas.posicionarBombasYNumeros();
    }

    function iniciar() {
        reloj = document.getElementById("reloj");
        setInterval(mostrarReloj, 1000);
    }

    function crearCronometro() {
        let cronometroElement = document.createElement("p");
        cronometroElement.id = "cronometro";
        contenedorBuscaminas.appendChild(cronometroElement);
        cronometro = document.getElementById("cronometro");
    }


    window.addEventListener("load", init);
}

function mostrarTablero() {
    console.table(buscaminas.tablero);
}