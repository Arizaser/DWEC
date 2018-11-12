/**
 * Tanto los arrays javaScript como los Sets permiten almacenar elementos.
 * Indica la diferencia entre ambos.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = `
        Diferencia entre Array y Sets:<br>
        El objeto Set no contiene índices como si lo tienen los arrays.<br>
        Al no contener índices, no se puede acceder al valor de una determinada posición a diferencia de como ocurre con un array.<br>
        Un valor solo puede estar una vez en el objeto set, en los arrays puede estar las veces que queramos.<br>
        `
    }

    window.addEventListener("load", iniciar);
}