let buscaminas = (function () {
    let filas = 0,
        columnas = 0,
        bombas = 0,
        banderas = 0,
        casillasPorDescubrir = 0,
        tablero = [],
        tablero2 = [],
        partidaFinalizada = false,
        cronometro = null,
        casillasAMostrar = null,
        casillasAlrededor = null;

    function init(filasPasadas, columnasPasadas, nBombas) {
        filas = filasPasadas;
        columnas = columnasPasadas;
        bombas = nBombas;
        banderas = bombas;
        casillasPorDescubrir = (filas * columnas) - bombas;
        partidaFinalizada = false;
        casillasAMostrar = [];
        casillasAlrededor = [],
        crearTableroArray();
        crearBombasYNumeros();
        mostrar();

        function crearTableroArray() {
            tablero = new Array(filas);
            for (let i = 0; i < filas; i++) {
                tablero[i] = [];
                tablero2[i] = [];
                for (let j = 0; j < columnas; j++) {
                    tablero[i][j] = 0;
                    tablero2[i][j] = 0;
                }
            }
        }

        function crearBombasYNumeros() {
            for (let i = 0; i < bombas; i++) {
                do {
                    x = Math.floor(Math.random() * filas), y = Math.floor(Math.random() * columnas);
                } while (tablero[x][y] === "x")
                tablero[x][y] = "x";
                for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                    for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                        if (tablero[j][k] !== "x")
                            tablero[j][k] += 1;
            }
        }
    }

    function mostrar() {
        console.log("Tablero con minas");
        console.table(tablero);
    }

    function marcar(fila, columna) {
        if (partidaFinalizada)
            return "La partida ya ha acabado.";
        let casilla = tablero2[fila][columna];
        if (casilla != "B") {
            if (banderas == 0)
                return "No puedes colocar más banderas";
            if (casilla == 0) {
                tablero2[fila][columna] = "B";
                setBanderas(-1);
            }
        } else {
            tablero2[fila][columna] = 0;
            setBanderas(1);
        }

        function setBanderas(valor) {
            banderas += valor;
        }
    }

    function picar(fila, columna) {
        if (partidaFinalizada)
            return "La partida ya ha acabado.";
        let valorMostrado = tablero2[fila][columna];
        if (valorMostrado !== 0)
            return "La casilla ya ha sido picada o no existe";
        let valor = tablero[fila][columna];
        switch (valor) {
            case 0:
                if (tablero2[fila][columna] != -1) {
                    casillasPorDescubrir--;
                    abrirVacios(fila, columna);
                }
                break;
            case "x":
                obtenerTodasLasMinas(fila, columna);
                return "¡Has perdido al pulsar una mina!";
            default:
                if (tablero2[fila][columna] != -1) {
                    tablero2[fila][columna] = valor;
                    casillasPorDescubrir--;
                }
                break;
        }
        casillasAMostrar.unshift([fila, columna, obtenerValorCasilla(fila, columna)]);
        if (casillasPorDescubrir == 0) {
            partidaFinalizada = true;
            return "¡Enhorabuena, has ganado!";
        }


        function abrirVacios(fila, columna) {
            if (tablero2[fila][columna] === 0) {
                tablero2[fila][columna] = -1;
                if (tablero[fila][columna] == 0)
                    for (let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, filas - 1); j++)
                        for (let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, columnas - 1); k++) {
                            if (tablero[j][k] != "x") {
                                picar(j, k);
                            }
                        }
            }
        }

        function obtenerTodasLasMinas(fila, columna) {
            casillasAMostrar.push([fila, columna, obtenerValorCasilla(fila, columna)]);
            for (let i = 0; i < tablero.length; i++) {
                for (let j = 0; j < tablero[i].length; j++) {
                    if (tablero[i][j] == "x" && tablero2[i][j] != "B") {
                        tablero2[i][j] = "x";
                        casillasAMostrar.push([i, j, obtenerValorCasilla(i, j)]);
                    }
                }
            }
            partidaFinalizada = true;
        }

        function obtenerValorCasilla(fila, columna) {
            return tablero[fila][columna];
        }
    }

    function despejar(fila, columna) {
        if (tablero2[fila][columna] == "0") {
            return "No puedes despejar una casilla tapada";
        }
        let filasExactas = filas - 1;
        let columnasExactas = columnas - 1;
        casillasAlrededor = [];
        let numBanderas = calcularNumeroBanderas(fila, columna, filasExactas, columnasExactas);
        if (numBanderas == tablero2[fila][columna]) {
            casillasAlrededor = [];
            if (fila != 0)
                if (tablero2[fila - 1][columna] == 0) {
                    picar(fila - 1, columna);
                }
            if (fila != filasExactas)
                if (tablero2[fila + 1][columna] == 0) {
                    picar(fila + 1, columna);
                }
            if (columna != columnasExactas)
                if (tablero2[fila][columna + 1] == 0) {
                    picar(fila, columna + 1);
                }
            if (columna != 0)
                if (tablero2[fila][columna - 1] == 0) {
                    picar(fila, columna - 1);
                }
            if (columna !== 0 && fila !== filasExactas)
                if (tablero2[fila + 1][columna - 1] == 0) {
                    picar(fila + 1, columna - 1);
                }
            if (fila != 0 && columna != 0)
                if (tablero2[fila - 1][columna - 1] == 0) {
                    picar(fila - 1, columna - 1);
                }
            if (fila != filasExactas && columna != columnasExactas)
                if (tablero2[fila + 1][columna + 1] == 0) {
                    picar(fila + 1, columna + 1);
                }
            if (fila != 0 && columna != columnasExactas)
                if (tablero2[fila - 1][columna + 1] == 0) {
                    picar(fila - 1, columna + 1);
                }
        }
    }

    function calcularNumeroBanderas(fila, columna, filas, columnas) {
        let numBanderas = 0;
        if (fila != 0) {
            if (tablero2[fila - 1][columna] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila - 1, columna]);
        }
        if (fila != filas) {
            if (tablero2[fila + 1][columna] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila + 1, columna]);
        }
        if (columna != columnas) {
            if (tablero2[fila][columna + 1] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila, columna + 1]);
        }
        if (columna != 0) {
            if (tablero2[fila][columna - 1] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila, columna - 1]);
        }
        if (columna !== 0 && fila !== filas) {
            if (tablero2[fila + 1][columna - 1] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila + 1, columna - 1]);
        }
        if (fila != 0 && columna != 0) {
            if (tablero2[fila - 1][columna - 1] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila - 1, columna - 1]);
        }
        if (fila != filas && columna != columnas) {
            if (tablero2[fila + 1][columna + 1] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila + 1, columna + 1]);
        }
        if (fila != 0 && columna != columnas) {
            if (tablero2[fila - 1][columna + 1] === "B")
                numBanderas++;
            else
                casillasAlrededor.push([fila - 1, columna + 1]);
        }
        return numBanderas;
    }

    function pararCronometroSiEstaActivo() {
        if (cronometro != null) {
            clearInterval(cronometro);
            cronometro = null;
        }
    }

    function getFilas() {
        return filas;
    }

    function getColumnas() {
        return columnas;
    }

    function getBanderas() {
        return banderas;
    }

    function getTablero2() {
        return tablero2;
    }

    function getCasillasAMostrar() {
        return casillasAMostrar;
    }

    function getCasillasAlrededor() {
        let casillasFiltradas = [];
        for (let i = 0; i < casillasAlrededor.length; i++) {
            if (getTablero2()[casillasAlrededor[i][0]][casillasAlrededor[i][1]] === 0)
                casillasFiltradas.push(obtenerCasilla(casillasAlrededor[i][0], casillasAlrededor[i][1]));
        }
        return casillasFiltradas;
    }

    function getCasillasPorDescubrir() {
        return casillasPorDescubrir;
    }

    function getCronometro() {
        return cronometro;
    }

    function setCronometro(cronometro2) {
        cronometro = cronometro2;
    }

    function isPartidaFinalizada() {
        return partidaFinalizada;
    }

    function restablecerCasillasAMostrar() {
        casillasAMostrar = [];
    }

    function restablecerCasillasAlrededor() {
        casillasAlrededor = [];
    }

    return {
        init: init,
        picar: picar,
        mostrar: mostrar,
        marcar: marcar,
        despejar: despejar,
        calcularNumeroBanderas: calcularNumeroBanderas,
        pararCronometroSiEstaActivo: pararCronometroSiEstaActivo,
        getFilas: getFilas,
        getColumnas: getColumnas,
        getBanderas: getBanderas,
        isPartidaFinalizada: isPartidaFinalizada,
        getTablero2: getTablero2,
        getCasillasAMostrar: getCasillasAMostrar,
        getCasillasAlrededor: getCasillasAlrededor,
        getCasillasPorDescubrir: getCasillasPorDescubrir,
        getCronometro: getCronometro,
        restablecerCasillasAMostrar: restablecerCasillasAMostrar,
        restablecerCasillasAlrededor: restablecerCasillasAlrededor,
        pararCronometroSiEstaActivo: pararCronometroSiEstaActivo,
        setCronometro: setCronometro,
    }
})();