/**
 * Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  
 * Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
        ejecutarPruebas(document.getElementById("informacion2"));
    }

    function mostrarInformacion(informacion){
        informacion.innerHTML += "Array.prototype.forEach(): Ejecuta la función indicada una vez por cada elemento del array.<br/>";
        informacion.innerHTML += "Array.prototype.every(): Devuelve true si todos los elementos en el array pasan la condición implementada por la función dada y false si alguno no la cumple.</br>";
        informacion.innerHTML += "Array.prototype.some(): Devuelve true si algún elemento del array cumple con la condición implementada por la función brindada, y false en caso de que ningún elemento cumpla con dicha condición.</br>";
        informacion.innerHTML += "Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.</br>";
    }

    function ejecutarPruebas(informacion2){
        let array = [0,1,2,4,8,16,32,64,128,256];
        informacion2.innerHTML += "Contenido del array: "+array+"<br/>";

        informacion2.innerHTML += "forEach(): Recorremos el array mostrando indice y valor.</br>";
        array.forEach(function(valor,indice){
            informacion2.innerHTML += "Índice: "+indice+" Valor: "+valor+"<br/>";
        })+"<br/>";

        informacion2.innerHTML += "every(): Todos los elementos son mayor que 10. "
        +array.every(function(valor){
            return valor > 10;
        })+"</br>";
        informacion2.innerHTML += "some(): Algún elemento es mayor que 200."+
        +array.some(function(valor){
            return valor > 200;
        })+"</br>";

        let array2 = array.filter(function(valor){return valor > 60;})
        informacion2.innerHTML += "filter(): Devuelve nuevo array con los valores mayores que 60: "+array2+"</br>";
    }

    window.addEventListener("load", iniciar);
}