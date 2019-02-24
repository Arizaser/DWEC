Buscaminas de José Rafael Álvarez Espino
https://alesjora.github.io/temas/tema6/buscaminasConJQuery/index.html


### Picar

Primero el método [obtenerEfectosCasillas()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/819ae4aff661cdb05584072a6b9ab35faddcd689/js/main.js#L406) se encarga de saber si la casilla picada tiene mina o no y le establece un efecto.

```javascript
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
```
Una vez que se han asignado los efectos y tiempos, el método [mostrarCasilla()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/819ae4aff661cdb05584072a6b9ab35faddcd689/js/main.js#L384) recorre las casillas y se los aplica.

```javascript
for (let i = 0; i < longitudArrayCasillas; i++) {
  $casilla = obtenerCasilla(arrayCasillas[i][0], arrayCasillas[i][1]);
  $casilla.delay(i * duracion).addClass(clase, duracion, "easeInOutBounce",function(){
    $(this).css(efectoSecundario);
   });
  if (arrayCasillas[i][2] !== 0 && arrayCasillas[i][2] !== "x")
   $casilla.text(arrayCasillas[i][2]);
}
```

### Click derecho
Lo gestiona el método [mostrarBandera()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/819ae4aff661cdb05584072a6b9ab35faddcd689/js/main.js#L423) que comprueba si la bandera está o no colocada, y realiza la acción.


```javascript
if (buscaminas.tablero2[fila][columna] == "B")
 obtenerCasilla(fila, columna).addClass("casillaConBandera",300,"easeInOutBounce");
else
  obtenerCasilla(fila, columna).removeClass("casillaConBandera",300,"easeInBack");
$marcadorBanderas.text("Banderas disponibles: " + buscaminas.banderas);
```

### Click ambos botones
Al hacer click con ambos botones puede pasar dos cosas:
1. Se puede despejar alrededor ya que las banderas están colocadas. Este caso lo gestiona el [mostrarCasilla()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/819ae4aff661cdb05584072a6b9ab35faddcd689/js/main.js#L384) anteriormente explicado.
2. No se puede despejar ya que las banderas no están colocadas. Este caso lo gestiona el [enfatizarCasillasAlrededor()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/819ae4aff661cdb05584072a6b9ab35faddcd689/js/main.js#L359).

```javascript
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

```
### Ganar y perder
Lo gestiona el método [comprobarFinalPartida()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/819ae4aff661cdb05584072a6b9ab35faddcd689/js/main.js#L435) que establece los efectos dependiendo de si ha ganado o ha perdido.
```javascript
if (buscaminas.casillasPorDescubrir === 0) {
  $("#textoFinal").text("¡Enhorabuena, has ganado!");
  efecto = "puff";
  color = "#25D366"
} else {
  $("#textoFinal").text("¡Has perdido al pulsar una mina!");
  efecto = "shake";
  color = "#F96546";
}
```

