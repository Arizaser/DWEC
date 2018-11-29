let buscaminas = {
    filas: 0,
    columnas: 0,
    bombas: 0,
    casillasPorDescubrir: 0,
    tablero: [],
    partidaFinalizada: false,
    cronometro: null,
    inicializar(filas, columnas, bombas) {
        this.filas = filas;
        this.columnas = columnas;
        this.bombas = bombas;
        this.casillasPorDescubrir = (filas * columnas) - bombas;
        this.partidaFinalizada = false;
        pararCronometroSiEstaActivo();
        resetearCronometro();
    },
    crearTableroArray() {
        this.tablero = new Array(this.filas);
        for (let i = 0; i < this.filas; i++) {
            this.tablero[i] = new Array(this.columnas);
            for (let j = 0; j < this.columnas; j++) {
                this.tablero[i][j] = 0;
            }
        }
    },
    crearTableroGrafico() {
        let tabla = document.createElement("table");
        let fila;
        let celda;
        tabla.setAttribute("id", "tablero");
        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement("tr");
            for (let j = 0; j < this.columnas; j++) {
                celda = document.createElement("td");
                celda.setAttribute("id", i + " " + j);
                celda.style.border = "1px solid black";
                celda.style.backgroundColor = "#9F1C01";
                celda.width = "45px";
                celda.height = "43px";
                celda.addEventListener("click", this.casillaPulsada);
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        contenedorBuscaminas.appendChild(tabla);
    },
    casillaPulsada(fila, columna) {
        if (buscaminas.partidaFinalizada)
            return;

        if (!buscaminas.cronometro) {

            buscaminas.cronometro = setInterval(mostrarReloj, 1000);
        }

        if (arguments.length == 1) {
            let arrayId = this.id.split(" ");
            fila = arrayId[0];
            columna = arrayId[1];
        }
        let casilla = buscaminas.obtenerCasilla(fila, columna);
        let valor = buscaminas.tablero[fila][columna];
        casilla.disabled = true;
        switch (valor) {
            case 0:
                casilla.style.backgroundColor = "#DBBDB7";
                buscaminas.casillasPorDescubrir--;
                buscaminas.abrirVacios(fila, columna);
                break;
            case "x":
                buscaminas.mostrarTodasLasMinas();
                buscaminas.finalizarPartida("¡Has perdido al pulsar una mina!", "red");
                break;
            default:
                if (valor != -1) {
                    casilla.style.backgroundColor = "#DBBDB7";
                    casilla.textContent = valor;
                    buscaminas.tablero[fila][columna] = -1;
                    buscaminas.casillasPorDescubrir--;
                    break;
                }
        }
        if (buscaminas.casillasPorDescubrir == 0) {
            buscaminas.finalizarPartida("¡Enhorabuena, has ganado!", "green");
        }
    },
    mostrarTodasLasMinas() {
        for (let i = 0; i < buscaminas.tablero.length; i++) {
            for (let j = 0; j < buscaminas.tablero[i].length; j++) {
                if (buscaminas.tablero[i][j] == "x") {
                    let casilla = buscaminas.obtenerCasilla(i, j);
                    casilla.textContent = "X";
                    casilla.style.backgroundColor = "#DBBDB7";
                }
            }
        }
    },
    finalizarPartida(mensaje, color) {
        buscaminas.partidaFinalizada = true;
        buscaminas.generarMensajeFinal(mensaje, color);
        pararCronometroSiEstaActivo();
    },
    generarMensajeFinal(mensaje, color) {
        let parrafo = document.createElement("p");
        parrafo.innerHTML = mensaje;
        parrafo.id = "parrafoFinal";
        parrafo.style.color = color;
        contenedorBuscaminas.appendChild(parrafo);
    },
    generarBombas() {
        let fila;
        let columna;
        for (let i = 0; i < this.bombas; i++) {
            do {
                fila = Math.floor(Math.random() * (this.filas - 1));
                columna = Math.floor(Math.random() * (this.columnas - 1));
            } while (this.tablero[fila][columna] == "x")
            this.tablero[fila][columna] = "x";
        }
    },
    obtenerCasilla(fila, columna) {
        return document.getElementById(fila + " " + columna);
    },
    posicionarBombasYNumeros() {
        for (let i = 0; i < this.bombas; i++) {
            do {
                x = Math.floor(Math.random() * this.filas), y = Math.floor(Math.random() * this.columnas);
            } while (this.tablero[x][y] === "x")
            this.tablero[x][y] = "x";
            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, this.filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, this.columnas - 1); k++)
                    if (this.tablero[j][k] !== "x")
                        this.tablero[j][k] += 1;
        }
    },
    abrirVacios(x, y) {
        if (buscaminas.tablero[x][y] == 0) {
            buscaminas.tablero[x][y] = -1;
            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++) {
                    buscaminas.casillaPulsada(j, k);
                }
        }

    },
}