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
        init(filas, columnas, bombas) {
            this.filas = filas;
            this.columnas = columnas;
            this.bombas = bombas;
            this.banderas = bombas;
            this.casillasPorDescubrir = (filas * columnas) - bombas;
            this.partidaFinalizada = false;
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
            console.log("Tablero que ve el usuario");
            console.table(this.tablero2);
        },
        marcar(fila, columna) {
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
                    mostrarTodasLasMinas();
                    return "¡Has perdido al pulsar una mina!";
                default:
                    if (buscaminas.tablero2[fila][columna] != -1) {
                        buscaminas.tablero2[fila][columna] = valor;
                        buscaminas.casillasPorDescubrir--;
                    }
                    break;

            }
            if (buscaminas.casillasPorDescubrir == 0) {
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

            function mostrarTodasLasMinas() {
                for (let i = 0; i < buscaminas.tablero.length; i++) {
                    for (let j = 0; j < buscaminas.tablero[i].length; j++) {
                        if (buscaminas.tablero[i][j] == "x") {
                            buscaminas.tablero2[i][j] = "x";
                        }
                    }
                }
            }
        },
    }
    
    var init = function (dificultad) {
        switch (dificultad) {
            case "facil":
                buscaminas.init(8, 8, 10);
                break;
            case "intermedio":
                buscaminas.init(16, 16, 40);
                break;
            case "dificil":
                buscaminas.init(16, 30, 99);
                break;
            default:
                console.log("Dificultad errónea, debe ser facil, intermedio o dificil");
        }
    }

    var mostrar = function () {
        buscaminas.mostrar();
    }
    var picar = function (fila, columna) {
        console.log(buscaminas.picar(fila, columna));
        
    }
    var marcar = function (fila, columna) {
        console.log(buscaminas.marcar(fila, columna));
        
    }
}