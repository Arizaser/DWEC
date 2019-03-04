{

    let $contenedorBuscaminas;
    let $muestraFinal;
    let $marcadorBanderas;

    function init(dificultad) {
        switch (dificultad) {
            case "facil":
                buscaminas.init(8, 8, 10);
                return [8, 8];
            case "intermedio":
                buscaminas.init(16, 16, 40);
                return [16, 16];
            case "dificil":
                buscaminas.init(16, 30, 99);
                return [16, 30];
            default:
                console.log("Dificultad errónea, debe ser facil, intermedio o dificil");
        }
    }

    $(function () {
        $muestraFinal = $("#muestraFinal");
        $contenedorBuscaminas = $("#contenedorBuscaminas");
        $("button").click(function (e) {
            e.preventDefault();
            let [filas, columnas] = init($(this).prop("id"));
            $("#botonesDificultad").html("<button><a href='index.html'>Volver a jugar</a></button>")
            if (filas && columnas) {
                eliminarTableroSiExiste();
                $muestraFinal.hide();
                if (!buscaminas.getCronometro())
                    crearCronometro();
                cronometro.resetearCronometro();
                buscaminas.pararCronometroSiEstaActivo();
                crearMarcadorBanderas();
                crearTableroGrafico(filas, columnas);
            }
        });
    });

    function crearTableroGrafico(filas, columnas) {
        let $tabla = $("<table>");
        let $fila;
        let $celda;
        $tabla.prop("id", "tablero");
        for (let i = 0; i < filas; i++) {
            $fila = $("<tr>");
            for (let j = 0; j < columnas; j++) {
                $celda = $("<td>");
                $celda.prop("id", i + "-" + j);
                $celda.addClass("casillaSinDescubrir");
                $celda.mousedown(function (event) {
                    clickACasilla(i, j, event);
                });
                $fila.append($celda);
            }
            $tabla.append($fila);
        }
        $contenedorBuscaminas.append($tabla);
        $("#tablero").show("slide");
    }

    function clickACasilla(i, j, event) {
        if (!buscaminas.getCronometro())
            buscaminas.setCronometro(setInterval(cronometro.calcularTiempo, 1000));
        event.preventDefault();
        switch (event.buttons) {
            case 1:
                buscaminas.picar(i, j)
                mostrarCasillas();
                break;
            case 2:
                buscaminas.marcar(i, j);
                mostrarBandera(i, j);
                break;
            case 3:
            case 4:
                buscaminas.despejar(i, j);
                if (buscaminas.getCasillasAlrededor().length !== 0)
                    enfatizarCasillasAlrededor(obtenerCasilla(i, j));
                else
                    mostrarCasillas();
                break;
        }
    }

    function eliminarTableroSiExiste() {
        let $tablero = $("#tablero");
        if ($tablero)
            $tablero.remove();
        if ($marcadorBanderas)
            $marcadorBanderas.remove();
    }

    function enfatizarCasillasAlrededor(casillaPulsada) {
        let clase = "casillaAlrededor";
        let $casillasAlrededor = $(buscaminas.getCasillasAlrededor());

        $casillasAlrededor.fadeIn(100, function () {
            $(this).addClass(clase);
        });

        casillaPulsada.on("mouseup mouseleave", function () {
            $casillasAlrededor.fadeIn(100, function () {
                $(this).removeClass(clase);
            });
        });
        //casillaPulsada.off("mouseup mouseleave");
        buscaminas.restablecerCasillasAlrededor();
    }

    function mostrarCasillas() {
        let $casilla;
        let arrayCasillas = buscaminas.getCasillasAMostrar();
        let [clase, duracion, efectoSecundario] = obtenerEfectosCasillas();

        $.each(arrayCasillas, function (index) { 
            $casilla = obtenerCasilla(arrayCasillas[index][0], arrayCasillas[index][1]);
            $casilla.delay(index * duracion).addClass(clase, duracion, "easeInOutBounce", function () {
                $(this).css(efectoSecundario);
            });
            if (arrayCasillas[index][2] !== 0 && arrayCasillas[index][2] !== "x")
                $casilla.text(arrayCasillas[index][2]);
        });

        buscaminas.restablecerCasillasAMostrar();
        comprobarFinalPartida(arrayCasillas.length * duracion + 500);
    }

    function obtenerEfectosCasillas() {
        if (buscaminas.isPartidaFinalizada() && buscaminas.getCasillasPorDescubrir() != 0)
            return ["casillaConBomba", 150, {
                "transform": "rotate(360deg)",
                "transition-duration": "0.3s"
            }]
        else
            return ["casillaDescubierta", 50, {
                "transform": "rotateY(360deg)",
                "transition-duration": "0.5s"
            }]
    }


    function mostrarBandera(fila, columna) {
        if (buscaminas.getTablero2()[fila][columna] == "B")
            obtenerCasilla(fila, columna).addClass("casillaConBandera", 300, "easeInElastic");
        else
            obtenerCasilla(fila, columna).removeClass("casillaConBandera", 300, "easeInBack");
        $marcadorBanderas.text("Banderas disponibles: " + buscaminas.getBanderas());
    }

    function obtenerCasilla(fila, columna) {
        return $("#" + fila + "-" + columna);
    }

    function comprobarFinalPartida(tiempo) {
        if (buscaminas.isPartidaFinalizada()) {
            buscaminas.pararCronometroSiEstaActivo();

            let efecto;
            let color;
            if (buscaminas.getCasillasPorDescubrir() === 0) {
                $("#textoFinal").text("¡Enhorabuena, has ganado!");
                efecto = "puff";
                color = "#25D366"
            } else {
                $("#textoFinal").text("¡Has perdido al pulsar una mina!");
                efecto = "shake";
                color = "#F96546";
            }
            setTimeout(function () {
                $muestraFinal.css("background-color", color);
                $muestraFinal.show(efecto);
            }, tiempo);
        }
    }

    function crearCronometro() {
        let $cronometroElement = $("<p>");
        $cronometroElement.prop("id", "cronometro");
        $contenedorBuscaminas.append($cronometroElement);
        cronometro.setCronometro($("#cronometro"));
    }

    function crearMarcadorBanderas() {
        $marcadorBanderas = $("<p>");
        $marcadorBanderas.prop("id", "marcadorBanderas");
        $marcadorBanderas.text("Banderas disponibles: " + buscaminas.getBanderas());
        $contenedorBuscaminas.append($marcadorBanderas);
    }

    document.oncontextmenu = function () {
        return false
    };
}