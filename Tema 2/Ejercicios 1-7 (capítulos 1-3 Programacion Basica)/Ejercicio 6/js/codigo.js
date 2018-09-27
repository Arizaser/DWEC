/**
 * Script del ejercicio 6
 * Autor: José Rafael Álvarez Espino
 */

 /**
  * Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
  * En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
  * Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
  * Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
 */

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = prompt("Introduce el número del DNI");
var letraDNI = prompt("Introduce la leta del DNI, en mayúscula").toUpperCase();

if(numeroDNI < 0 || numeroDNI > 99999999)
  alert("El número de DNI introducido no es correcto");
else{
  var letraGenerada = letras[numeroDNI % 23];
  let mensaje = (letraDNI == letraGenerada)?"La letra introducida es correcta":"La letra introducida no es correcta";
  alert(mensaje);
}
 