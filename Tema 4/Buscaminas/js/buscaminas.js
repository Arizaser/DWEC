contador = 0;
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
    inicializar(filas, columnas, bombas) {
        this.filas = filas;
        this.columnas = columnas;
        this.bombas = bombas;
        this.banderas = bombas;
        this.casillasPorDescubrir = (filas * columnas) - bombas;
        this.partidaFinalizada = false;
        this.crearReferenciaBanderaSiNoExiste();
        this.asignarMarcadorBanderas();
        pararCronometroSiEstaActivo();
        resetearCronometro();
    },
    asignarMarcadorBanderas() {
        this.marcadorBanderas.textContent = "Banderas disponibles: " + this.banderas;
    },
    crearTableroArray() {

        this.tablero = new Array(this.filas);
        for (let i = 0; i < this.filas; i++) {
            this.tablero[i] = [];
            this.tablero2[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                this.tablero[i][j] = 0;
                this.tablero2[i][j] = 0;
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
                celda.addEventListener("mousedown", function (event) {
                    if (!buscaminas.cronometro)
                        buscaminas.cronometro = setInterval(mostrarReloj, 1000);

                    event.preventDefault();
                    switch (event.button) {
                        case 0:
                            buscaminas.casillaPulsada(false, false, this.id);
                            break;
                        case 2:
                            buscaminas.colorcarBandera(this.id);
                            break;
                    }
                });
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
        contenedorBuscaminas.appendChild(tabla);
    },
    colorcarBandera(id) {
        let [fila, columna] = id.split(" ");
        let casilla = buscaminas.obtenerCasilla(fila, columna);
        if (casilla.name == "colocado")
            return;
        if (casilla.name != "bandera") {
            if (buscaminas.banderas == 0)
                return;
            casilla.style.backgroundImage = "url(images/bandera.jpg)";
            casilla.name = "bandera";
            buscaminas.setBanderas(-1);
        } else {
            casilla.style.backgroundImage = "";
            casilla.style.backgroundColor = "#9F1C01";
            casilla.name = "";
            buscaminas.setBanderas(1);
        }
    },
    casillaPulsada(fila, columna, id) {
        if (buscaminas.partidaFinalizada)
            return;
        if (id) {
            [fila, columna] = id.split(" ");
        }
        let casilla = buscaminas.obtenerCasilla(fila, columna);
        if (casilla.name == "bandera")
            return;
        let valor = buscaminas.tablero[fila][columna];
        casilla.disabled = true;
        switch (valor) {
            case 0:
                if (buscaminas.tablero2[fila][columna] != -1) {
                    casilla.style.backgroundColor = "#DBBDB7";
                    buscaminas.casillasPorDescubrir--;
                    casilla.name = "colocado";
                    buscaminas.abrirVacios(fila, columna);
                }

                break;
            case "x":
                buscaminas.mostrarTodasLasMinas();
                buscaminas.finalizarPartida("¡Has perdido al pulsar una mina!", "red");
                break;
            default:
                if (buscaminas.tablero2[fila][columna] != -1) {
                    casilla.style.backgroundColor = "#DBBDB7";
                    casilla.textContent = valor;
                    buscaminas.tablero2[fila][columna] = -1;
                    buscaminas.casillasPorDescubrir--;
                    casilla.name = "colocado";
                }

                break;

        }
        if (buscaminas.casillasPorDescubrir == 0) {
            buscaminas.finalizarPartida("¡Enhorabuena, has ganado!", "green");
        }
    },
    crearMarcadorBanderas() {
        let marcador = document.createElement("p");
        marcador.id = "marcadorBanderas";
        contenedorBuscaminas.appendChild(marcador);
    },
    mostrarTodasLasMinas() {
        let casilla;
        for (let i = 0; i < buscaminas.tablero.length; i++) {
            for (let j = 0; j < buscaminas.tablero[i].length; j++) {
                if (buscaminas.tablero[i][j] == "x") {
                    casilla = buscaminas.obtenerCasilla(i, j);
                    casilla.textContent = "X";
                    casilla.style.backgroundColor = "#DBBDB7";
                    casilla.style.backgroundImage = "";
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
    obtenerCasilla(fila, columna) {
        return document.getElementById(fila + " " + columna);
    },
    crearBombasYNumeros() {
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
    setBanderas(valor) {
        buscaminas.banderas += valor;
        buscaminas.asignarMarcadorBanderas();
    },
    crearReferenciaBanderaSiNoExiste() {
        if (this.marcadorBanderas == null)
            this.marcadorBanderas = document.getElementById("marcadorBanderas");
    },
    abrirVacios(fila, columna) {
        if (buscaminas.tablero2[fila][columna] === 0) {
            buscaminas.tablero2[fila][columna] = -1;
            if (buscaminas.tablero[fila][columna] == 0)
                for (let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, buscaminas.filas - 1); j++)
                    for (let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, buscaminas.columnas - 1); k++) {
                        if (buscaminas.tablero[j][k] != "x") {
                            buscaminas.casillaPulsada(j, k);
                        }

                    }
        }

    },
}