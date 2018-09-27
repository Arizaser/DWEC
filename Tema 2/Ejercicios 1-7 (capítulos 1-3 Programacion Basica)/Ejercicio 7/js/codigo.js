/**
 * Script del ejercicio 7
 * Autor: José Rafael Álvarez Espino
 */

 /**
  * El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1.
  * Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
  * Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
 */

var numero = prompt("Escribe el número a calcular su factorial");
var resultado = 1;
for(var i = numero; i > 0; i--){
  resultado *= i;
}
alert("El factorial de "+numero+" es: "+resultado);
 