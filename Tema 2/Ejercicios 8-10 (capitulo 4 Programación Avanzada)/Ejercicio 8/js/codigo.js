/**
 * Script del ejercicio 8
 * Autor: José Rafael Álvarez Espino
 */

 /**
  * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
  * Mostrar por pantalla el resultado devuelto por la función.
  * */



var mostrar = document.getElementById("contenido");

function calcular_par_impar(){
  let valor = prompt("Introduce un número");
  let mensaje = (valor % 2 == 0)?"El número introducido es par":"El número introducido es impar";
  mostrar.textContent = mensaje;
}

document.onload = calcular_par_impar();
 