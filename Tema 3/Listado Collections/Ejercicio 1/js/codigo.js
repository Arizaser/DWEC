/**
 * Tanto los objetos javaScript como los Maps permiten almacenar pares clave/valor. 
 * Indica la diferencia entre ambos.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = `
        Diferencia entre Map y objetos:<br>
        Las claves de un objeto son Strings y Symbols, mientras que para un Map pueden ser de cualquier tipo, incluyendo funciones, objetos y cualquier otro tipo primitivo.<br>
        Puedes saber fácilmente el tamaño de un Map usando la propiedad size, mientras que el número de propiedades en un objeto tiene que ser determinado manualmente.<br>
        Un Map es un iterable lo que permite iterar directamente sobre él, mientras que si queremos iterar sobre un objeto necesitamos obtener primero las claves de alguna forma para después iterar sobre él.<br>
        Un objeto tiene prototipo, por lo que hay claves por defecto en tu mapa que pueden colisionar con tus claves si no eres cuidadoso. <br>
        `
    }

    window.addEventListener("load", iniciar);
}