/**
 * Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
 * Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
 * Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
 * */

{
    function iniciar() {
        ejecutarPruebas(document.getElementById("informacion"));
    }

    function ejecutarPruebas(informacion2){
        let t0,t1;
        t0 = performance.now();
        array = crearArrayDirectamente();
        t1 = performance.now();
        informacion2.innerHTML += "Tiempo en crear array con 100 elementos directamente: "+(t1-t0)+" ms<br/>";

        t1 = performance.now();
        array = new Array(100);
        array.unshift(0, 1, 2, 3, 4, 5, 6, 7 , 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
            40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
            50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 
            60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 
            70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 
            80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 
            90, 91, 92, 93, 94, 95, 96, 97, 98, 99);
        informacion2.innerHTML += "Tiempo en crear array con 100 elementos con unshift: "+(t1-t0)+" ms<br/>";

        t1 = performance.now();
        array = new Array(100);
        array.push(0, 1, 2, 3, 4, 5, 6, 7 , 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
            40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
            50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 
            60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 
            70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 
            80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 
            90, 91, 92, 93, 94, 95, 96, 97, 98, 99);
        informacion2.innerHTML += "Tiempo en crear array con 100 elementos con push: "+(t1-t0)+" ms<br/>";

        array = crearArrayDirectamente();
        t0 = performance.now();
        array = [];
        t1 = performance.now();
        informacion2.innerHTML += "Tiempo en eliminar array con 100 elementos directamente: "+(t1-t0)+" ms<br/>";

        array = crearArrayDirectamente();
        t0 = performance.now();
        while(array.length > 0){
            array.shift();
        }
        t1 = performance.now();
        informacion2.innerHTML += "Tiempo en eliminar array con 100 elementos con shift: "+(t1-t0)+" ms<br/>";

        array = crearArrayDirectamente();
        t0 = performance.now();
        while(array.length > 0){
            array.pop();
        }
        t1 = performance.now();
        informacion2.innerHTML += "Tiempo en eliminar array con 100 elementos con pop: "+(t1-t0)+" ms<br/>";


    }

    function crearArrayDirectamente(){
        return [0, 1, 2, 3, 4, 5, 6, 7 , 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
            40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
            50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 
            60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 
            70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 
            80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 
            90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    }

    window.addEventListener("load", iniciar);
}