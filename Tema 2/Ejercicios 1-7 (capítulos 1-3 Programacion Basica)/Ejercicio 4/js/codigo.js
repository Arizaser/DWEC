/**
 * Script del ejercicio 4
 * Autor: José Rafael Álvarez Espino
 */
var valores = [true, 5, false, "hola", "adios", 2];

//Determinar cual de los dos elementos de texto es mayor
var resultado = valores[3] > valores[4];
alert("El valor 3 es mayor que el valor 4: "+resultado);


/**
 * Utilizando exclusivamente los dos valores booleanos del array, 
 * determinar los operadores necesarios para obtener un resultado true y otro resultado false*/
alert("Operador usado para mostrar valor true: ||");
alert("Operador usado para mostrar valor false: &&");

/**
 * Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos.
 */
alert("El resultado de sumar "+valores[1]+ " y "+valores[5]+" es: "+(valores[1] + valores[5]));
alert("El resultado de restar "+valores[1]+ " y "+valores[5]+" es: "+(valores[1] - valores[5]));
alert("El resultado de multiplicar "+valores[1]+ " y "+valores[5]+" es: "+(valores[1] * valores[5]));
alert("El resultado de dividir "+valores[1]+ " y "+valores[5]+" es: "+(valores[1] / valores[5]));
alert("El resultado del resto "+valores[1]+ " y "+valores[5]+" es: "+(valores[1] % valores[5]));