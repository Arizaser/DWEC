Buscaminas de José Rafael Álvarez Espino
https://alesjora.github.io/temas/tema6/buscaminasConJQuery/index.html


### Picar

Primero el método [obtenerEfectosCasillas()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/84d1cd5fbd61c6c88fb8401361d049c22828f808/js/main.js#L132) se encarga de saber si la casilla picada tiene mina o no y le establece un efecto.

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
Una vez que se han asignado los efectos y tiempos, el método [mostrarCasilla()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/84d1cd5fbd61c6c88fb8401361d049c22828f808/js/main.js#L114) recorre las casillas y se los aplica.

```javascript
$.each(arrayCasillas, function (index) { 
   $casilla = obtenerCasilla(arrayCasillas[index][0], arrayCasillas[index][1]);
   $casilla.delay(index * duracion).addClass(clase, duracion, "easeInOutBounce", function () {
      $(this).css(efectoSecundario);
   });
   if (arrayCasillas[index][2] !== 0 && arrayCasillas[index][2] !== "x")
      $casilla.text(arrayCasillas[index][2]);
});
```

### Click derecho
Lo gestiona el método [mostrarBandera()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/84d1cd5fbd61c6c88fb8401361d049c22828f808/js/main.js#L146) que comprueba si la bandera está o no colocada, y realiza la acción.


```javascript
if (buscaminas.tablero2[fila][columna] == "B")
 obtenerCasilla(fila, columna).addClass("casillaConBandera",300,"easeInOutBounce");
else
  obtenerCasilla(fila, columna).removeClass("casillaConBandera",300,"easeInBack");
$marcadorBanderas.text("Banderas disponibles: " + buscaminas.banderas);
```

### Click ambos botones
Al hacer click con ambos botones puede pasar dos cosas:
1. Se puede despejar alrededor ya que las banderas están colocadas. Este caso lo gestiona el [mostrarCasilla()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/84d1cd5fbd61c6c88fb8401361d049c22828f808/js/main.js#L114) anteriormente explicado.
2. No se puede despejar ya que las banderas no están colocadas. Este caso lo gestiona el [enfatizarCasillasAlrededor()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/84d1cd5fbd61c6c88fb8401361d049c22828f808/js/main.js#L97).

El siguiente código se aplicará mientras los botones estén pulsados, es decir, para ver las casillas resaltadas hay que mantener los dos botones pulsados. En el momento que los soltemos se desactivará el efecto.

```javascript
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
```
### Ganar y perder
Lo gestiona el método [comprobarFinalPartida()](https://github.com/iesgrancapitan-dwec/Buscaminas-JoseRafaelAlvarez/blob/84d1cd5fbd61c6c88fb8401361d049c22828f808/js/main.js#L158) que establece los efectos dependiendo de si ha ganado o ha perdido.
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
Finalmente se asignan dichos efectos y colores.

```javascript
setTimeout(function () {
   $muestraFinal.css("background-color", color);
   $muestraFinal.show(efecto);
}, tiempo);
```
