{   
    let contenedorBuscaminas;
    function init() {
        let botones = document.getElementsByTagName("button");
        contenedorBuscaminas = document.getElementById("contenedorBuscaminas");
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", calcularValores);
        }
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

    function eliminarTableroSiExiste(){
        let tablero = document.getElementById("tablero");
        let parrafoFinal = document.getElementById("parrafoFinal");
        if(tablero)
            contenedorBuscaminas.removeChild(tablero);
        if(parrafoFinal)
            contenedorBuscaminas.removeChild(parrafoFinal);
    }

    function crearPartida(filas, columnas, minas) {
        buscaminas.inicializar(filas, columnas, minas);
        buscaminas.crearTableroGrafico();
        buscaminas.crearTableroArray();
        buscaminas.generarBombas();
        buscaminas.calcularNumerosAlrededor();
        buscaminas.recorrerTablero();
    }

    let buscaminas = {
        filas: 0,
        columnas: 0,
        bombas: 0,
        casillasPorDescubrir: 0,
        tablero: [],
        partidaFinalizada: false,
        inicializar(filas, columnas, bombas) {
            this.filas = filas;
            this.columnas = columnas;
            this.bombas = bombas;
            this.casillasPorDescubrir = (filas * columnas) - bombas;
            this.partidaFinalizada = false;
        },
        recorrerTablero() {
            let cadena = "";
            for (let i = 0; i < this.tablero.length; i++) {
                for (let j = 0; j < this.tablero[i].length; j++) {
                    cadena += this.tablero[i][j];
                }
                console.log(cadena);
                cadena = "";
            }
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
                    celda.setAttribute("id", i + "" + j);
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

            if (arguments.length == 1) {
                let arrayId = this.id.split("");
                fila = arrayId[0];
                columna = arrayId[1];
            }
            let casilla = buscaminas.obtenerCasilla(fila, columna);
            let valor = buscaminas.tablero[fila][columna];
            casilla.removeEventListener("click", buscaminas.casillaPulsada);
            switch (valor) {
                case 0:
                    casilla.style.backgroundColor = "#DBBDB7";
                    buscaminas.casillasPorDescubrir--;
                    //buscaminas.abrirAlrededor2(fila, columna)
                    break;
                case "x":
                    buscaminas.mostrarTodasLasMinas();
                    buscaminas.finalizarPartida("¡Has perdido al pulsar una mina!", "red");
                    break;
                default:
                    casilla.style.backgroundColor = "#DBBDB7";
                    casilla.textContent = valor;
                    buscaminas.casillasPorDescubrir--;
                    break;
            }
            if (buscaminas.casillasPorDescubrir == 0) {
                buscaminas.finalizarPartida("¡Enhorabuena, has ganado!", "green");
            }
        },
        mostrarTodasLasMinas(){
            for (let i = 0; i < buscaminas.tablero.length; i++) {
                for (let j = 0; j < buscaminas.tablero[i].length; j++) {
                    if(buscaminas.tablero[i][j] == "x"){
                        let casilla = buscaminas.obtenerCasilla(i,j);
                        casilla.textContent = "X";
                        casilla.style.backgroundColor = "#DBBDB7";
                    }
                }
            }
        },
        finalizarPartida(mensaje,color) {
            buscaminas.partidaFinalizada = true;
            buscaminas.generarMensajeFinal(mensaje, color);
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
            return document.getElementById(fila + "" + columna);
        },
        calcularNumerosAlrededor() {
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    if (this.tablero[i][j] == "x") {
                        if (i == 0 && j == 0) {
                            buscaminas.colocaNumeroBombas(i, j, i + 1, j + 1);
                        } else if (i == 0 && (j > 0 && j < 7)) {
                            buscaminas.colocaNumeroBombas(i, j - 1, i + 1, j + 1);
                        } else if (i == 0 && j == 7) {
                            buscaminas.colocaNumeroBombas(i, j - 1, i + 1, j);
                        } else if (j == 7 && (i > 0 && i < 7)) {
                            buscaminas.colocaNumeroBombas(i - 1, j - 1, i + 1, j);
                        } else if (i == 7 && j == 7) {
                            buscaminas.colocaNumeroBombas(i - 1, j - 1, i, j);
                        } else if (i == 7 && (j > 0 && j < 7)) {
                            buscaminas.colocaNumeroBombas(i - 1, j - 1, i, j + 1);
                        } else if (i == 7 && j == 0) {
                            buscaminas.colocaNumeroBombas(i - 1, j, i, j + 1);
                        } else if (j == 0 && (i > 0 && i < 7)) {
                            buscaminas.colocaNumeroBombas(i - 1, j, i + 1, j + 1);
                        } else {
                            buscaminas.colocaNumeroBombas(i - 1, j - 1, i + 1, j + 1);
                        }
                    }
                }
            }
        },
        //abrirAlrededor2(x, y) {
            
            //for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.columnas - 1); j++)
              //  for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.filas - 1); k++) {
                //    buscaminas.casillaPulsada(j, k);
               // }
        //},
        colocaNumeroBombas(vari, varj, fini, finj) {
            for (let i = vari; i <= fini; i++) {
                for (let j = varj; j <= finj; j++) {
                    if (this.tablero[i][j] != "x") {
                        this.tablero[i][j] = (parseInt(this.tablero[i][j]) + 1);
                    }
                }
            }
        }
    }

    window.addEventListener("load", init);
}