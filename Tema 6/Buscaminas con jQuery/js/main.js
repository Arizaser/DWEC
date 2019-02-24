{
    let buscaminas = {
        filas: 0,
        columnas: 0,
        bombas: 0,
        banderas: 0,
        casillasPorDescubrir: 0,
        tablero: [],
        tablero2: [],
        partidaFinalizada: false,
        marcadorBanderas: null,
        cronometro: null,
        casillasAMostrar: null,
        casillasAlrededor: null,
        init(filas, columnas, bombas) {
            this.filas = filas;
            this.columnas = columnas;
            this.bombas = bombas;
            this.banderas = bombas;
            this.casillasPorDescubrir = (filas * columnas) - bombas;
            this.partidaFinalizada = false;
            this.casillasAMostrar = [];
            this.casillasAlrededor = [],
                crearTableroArray();
            crearBombasYNumeros();
            this.mostrar();

            function crearTableroArray() {
                buscaminas.tablero = new Array(buscaminas.filas);
                for (let i = 0; i < buscaminas.filas; i++) {
                    buscaminas.tablero[i] = [];
                    buscaminas.tablero2[i] = [];
                    for (let j = 0; j < buscaminas.columnas; j++) {
                        buscaminas.tablero[i][j] = 0;
                        buscaminas.tablero2[i][j] = 0;
                    }
                }
            }

            function crearBombasYNumeros() {
                for (let i = 0; i < buscaminas.bombas; i++) {
                    do {
                        x = Math.floor(Math.random() * buscaminas.filas), y = Math.floor(Math.random() * buscaminas.columnas);
                    } while (buscaminas.tablero[x][y] === "x")
                    buscaminas.tablero[x][y] = "x";
                    for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                        for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++)
                            if (buscaminas.tablero[j][k] !== "x")
                                buscaminas.tablero[j][k] += 1;
                }
            }
        },
        mostrar() {
            console.log("Tablero con minas");
            console.table(this.tablero);
        },
        marcar(fila, columna) {
            if (buscaminas.partidaFinalizada)
                return "La partida ya ha acabado.";
            let casilla = buscaminas.tablero2[fila][columna];
            if (casilla != "B") {
                if (buscaminas.banderas == 0)
                    return "No puedes colocar más banderas";
                if (casilla == 0) {
                    buscaminas.tablero2[fila][columna] = "B";
                    setBanderas(-1);
                }
            } else {
                buscaminas.tablero2[fila][columna] = 0;
                setBanderas(1);
            }

            function setBanderas(valor) {
                buscaminas.banderas += valor;
            }
        },
        picar(fila, columna) {
            if (buscaminas.partidaFinalizada)
                return "La partida ya ha acabado.";
            let valorMostrado = buscaminas.tablero2[fila][columna];
            if (valorMostrado !== 0)
                return "La casilla ya ha sido picada o no existe";
            let valor = buscaminas.tablero[fila][columna];
            switch (valor) {
                case 0:
                    if (buscaminas.tablero2[fila][columna] != -1) {
                        buscaminas.casillasPorDescubrir--;
                        abrirVacios(fila, columna);
                    }
                    break;
                case "x":
                    obtenerTodasLasMinas(fila, columna);
                    return "¡Has perdido al pulsar una mina!";
                default:
                    if (buscaminas.tablero2[fila][columna] != -1) {
                        buscaminas.tablero2[fila][columna] = valor;
                        buscaminas.casillasPorDescubrir--;
                    }
                    break;
            }
            buscaminas.casillasAMostrar.unshift([fila, columna, obtenerValorCasilla(fila, columna)]);
            if (buscaminas.casillasPorDescubrir == 0) {
                buscaminas.partidaFinalizada = true;
                return "¡Enhorabuena, has ganado!";
            }


            function abrirVacios(fila, columna) {
                if (buscaminas.tablero2[fila][columna] === 0) {
                    buscaminas.tablero2[fila][columna] = -1;
                    if (buscaminas.tablero[fila][columna] == 0)
                        for (let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, buscaminas.filas - 1); j++)
                            for (let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, buscaminas.columnas - 1); k++) {
                                if (buscaminas.tablero[j][k] != "x") {
                                    buscaminas.picar(j, k);
                                }

                            }
                }
            }

            function obtenerTodasLasMinas(fila, columna) {
                buscaminas.casillasAMostrar.push([fila, columna, obtenerValorCasilla(fila, columna)]);
                for (let i = 0; i < buscaminas.tablero.length; i++) {
                    for (let j = 0; j < buscaminas.tablero[i].length; j++) {
                        if (buscaminas.tablero[i][j] == "x" && buscaminas.tablero2[i][j] != "B") {
                            buscaminas.tablero2[i][j] = "x";
                            buscaminas.casillasAMostrar.push([i, j, obtenerValorCasilla(i, j)]);
                        }
                    }
                }
                buscaminas.partidaFinalizada = true;
            }

            function obtenerValorCasilla(fila, columna) {
                return buscaminas.tablero[fila][columna];
            }
        },
        despejar(fila, columna) {
            if (buscaminas.tablero2[fila][columna] == "0") {
                return "No puedes despejar una casilla tapada";
            }
            let filas = buscaminas.filas - 1;
            let columnas = buscaminas.columnas - 1;
            buscaminas.casillasAlrededor = [];
            let numBanderas = buscaminas.calcularNumeroBanderas(fila, columna, filas, columnas);
            if (numBanderas == buscaminas.tablero2[fila][columna]) {
                buscaminas.casillasAlrededor = [];
                if (fila != 0)
                    if (buscaminas.tablero2[fila - 1][columna] == 0) {
                        picar(fila - 1, columna);
                    }
                if (fila != filas)
                    if (buscaminas.tablero2[fila + 1][columna] == 0) {
                        picar(fila + 1, columna);
                    }
                if (columna != columnas)
                    if (buscaminas.tablero2[fila][columna + 1] == 0) {
                        picar(fila, columna + 1);
                    }
                if (columna != 0)
                    if (buscaminas.tablero2[fila][columna - 1] == 0) {
                        picar(fila, columna - 1);
                    }
                if (columna !== 0 && fila !== filas)
                    if (buscaminas.tablero2[fila + 1][columna - 1] == 0) {
                        picar(fila + 1, columna - 1);
                    }
                if (fila != 0 && columna != 0)
                    if (buscaminas.tablero2[fila - 1][columna - 1] == 0) {
                        picar(fila - 1, columna - 1);
                    }
                if (fila != filas && columna != columnas)
                    if (buscaminas.tablero2[fila + 1][columna + 1] == 0) {
                        picar(fila + 1, columna + 1);
                    }
                if (fila != 0 && columna != columnas)
                    if (buscaminas.tablero2[fila - 1][columna + 1] == 0) {
                        picar(fila - 1, columna + 1);
                    }
            }
        },
        calcularNumeroBanderas(fila, columna, filas, columnas) {
            let numBanderas = 0;
            if (fila != 0) {
                if (buscaminas.tablero2[fila - 1][columna] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila - 1, columna]);
            }
            if (fila != filas) {
                if (buscaminas.tablero2[fila + 1][columna] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila + 1, columna]);
            }
            if (columna != columnas) {
                if (buscaminas.tablero2[fila][columna + 1] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila, columna + 1]);
            }
            if (columna != 0) {
                if (buscaminas.tablero2[fila][columna - 1] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila, columna - 1]);
            }
            if (columna !== 0 && fila !== filas) {
                if (buscaminas.tablero2[fila + 1][columna - 1] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila + 1, columna - 1]);
            }
            if (fila != 0 && columna != 0) {
                if (buscaminas.tablero2[fila - 1][columna - 1] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila - 1, columna - 1]);
            }
            if (fila != filas && columna != columnas) {
                if (buscaminas.tablero2[fila + 1][columna + 1] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila + 1, columna + 1]);
            }
            if (fila != 0 && columna != columnas) {
                if (buscaminas.tablero2[fila - 1][columna + 1] === "B")
                    numBanderas++;
                else
                    buscaminas.casillasAlrededor.push([fila - 1, columna + 1]);
            }
            return numBanderas;
        },
        pararCronometroSiEstaActivo() {
            if (buscaminas.cronometro != null) {
                clearInterval(buscaminas.cronometro);
                buscaminas.cronometro = null;
            }
        },
    }

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

    function mostrar() {
        buscaminas.mostrar();
    }

    function picar(fila, columna) {
        console.log(buscaminas.picar(fila, columna));

    }

    function marcar(fila, columna) {
        console.log(buscaminas.marcar(fila, columna));

    }

    function despejar(fila, columna) {
        console.log(buscaminas.despejar(fila, columna));
    }

    let $contenedorBuscaminas;
    let $muestraFinal;
    let $marcadorBanderas;
    let cambiarNivel = true;
    $(function () {
        $muestraFinal = $("#muestraFinal");
        $contenedorBuscaminas = $("#contenedorBuscaminas");
        $("button").click(function (e) {
            e.preventDefault();
            if (!cambiarNivel)
                return;
            setPuedeCambiarNivel(false);
            let [filas, columnas] = init($(this).prop("id"));
            if (filas && columnas) {
                eliminarTableroSiExiste();
                $muestraFinal.hide();
                if (!cronometro)
                    crearCronometro();
                buscaminas.pararCronometroSiEstaActivo();
                resetearCronometro();
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
        $("#tablero").show("slide", function () {
            setPuedeCambiarNivel(true);
        });
    }

    function clickACasilla(i, j, event) {
        if (!buscaminas.cronometro)
            buscaminas.cronometro = setInterval(mostrarReloj, 1000);
        event.preventDefault();
        switch (event.buttons) {
            case 1:
                picar(i, j)
                mostrarCasillas();
                break;
            case 2:
                marcar(i, j);
                mostrarBandera(i, j);
                break;
            case 3:
            case 4:
                despejar(i, j);
                if (buscaminas.casillasAlrededor.length !== 0)
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
        let arrayCasillas = buscaminas.casillasAlrededor;
        let casillasFiltradas = [];
        let clase = "casillaAlrededor";
        for (let i = 0; i < arrayCasillas.length; i++) {
            if (buscaminas.tablero2[arrayCasillas[i][0]][arrayCasillas[i][1]] === 0)
                casillasFiltradas.push(obtenerCasilla(arrayCasillas[i][0], arrayCasillas[i][1]));
        }
        casillasFiltradas.forEach(element => {
            element.fadeIn(100, function () {
                $(this).addClass(clase);
            });
        });

        casillaPulsada.on("mouseup mouseleave", function () {
            casillasFiltradas.forEach(element => {
                element.fadeIn(100, function () {
                    $(this).removeClass(clase);
                });
            });
            casillaPulsada.off("mouseup mouseleave");
        });
        buscaminas.casillasAlrededor = [];
    }

    function mostrarCasillas() {
        let $casilla;
        let arrayCasillas = buscaminas.casillasAMostrar;
        let [clase, duracion, efectoSecundario] = obtenerEfectosCasillas();

        longitudArrayCasillas = arrayCasillas.length;
        setPuedeCambiarNivel(false);
        for (let i = 0; i < longitudArrayCasillas; i++) {
            $casilla = obtenerCasilla(arrayCasillas[i][0], arrayCasillas[i][1]);
            $casilla.delay(i * duracion).addClass(clase, duracion, "easeInOutBounce", function () {
                $(this).css(efectoSecundario);
            });
            if (arrayCasillas[i][2] !== 0 && arrayCasillas[i][2] !== "x")
                $casilla.text(arrayCasillas[i][2]);
        }
        buscaminas.casillasAMostrar = [];
        comprobarFinalPartida(arrayCasillas.length * duracion + 500);
        setTimeout(function () {
            setPuedeCambiarNivel(true)
        }, longitudArrayCasillas * duracion + 1500);
    }

    function obtenerEfectosCasillas() {
        if (buscaminas.partidaFinalizada && buscaminas.casillasPorDescubrir != 0)
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

    function setPuedeCambiarNivel(valor) {
        cambiarNivel = valor
    }

    function mostrarBandera(fila, columna) {
        if (buscaminas.tablero2[fila][columna] == "B")
            obtenerCasilla(fila, columna).addClass("casillaConBandera", 300, "easeInOutBounce");
        else
            obtenerCasilla(fila, columna).removeClass("casillaConBandera", 300, "easeInBack");
        $marcadorBanderas.text("Banderas disponibles: " + buscaminas.banderas);
    }

    function obtenerCasilla(fila, columna) {
        return $("#" + fila + "-" + columna);
    }

    function comprobarFinalPartida(tiempo) {
        if (buscaminas.partidaFinalizada) {
            buscaminas.pararCronometroSiEstaActivo();

            let efecto;
            let color;
            if (buscaminas.casillasPorDescubrir === 0) {
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
        cronometro = document.getElementById("cronometro");
    }

    function crearMarcadorBanderas() {
        $marcadorBanderas = $("<p>");
        $marcadorBanderas.prop("id", "marcadorBanderas");
        $marcadorBanderas.text("Banderas disponibles: " + buscaminas.banderas);
        $contenedorBuscaminas.append($marcadorBanderas);
    }

    document.oncontextmenu = function () {
        return false
    };
}