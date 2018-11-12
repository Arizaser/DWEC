/**
 * Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Map.
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = "Las salidas de información están en la consola";
        
        //Creo un objeto map pasándole como argumento un array.
        let arrayAlumnos = [[0,"Mario Navarro"],[1,"Javier González"],[2,"Angelo Barbara"],[3,"Rafael García"]]
        let map = new Map(arrayAlumnos);
        //Muestro los elementos que contiene
        mostrarMap(map,"Muestro los elementos");
        //Añadimos un alumno con el método set()
        map.set(4,"Rafael Sojo");
        //Muestro de nuevo los elementos para ver que se ha añadido correctamente
        mostrarMap(map,"Muestro de nuevo los elementos para ver que se ha añadido correctamente");
        //Elimino un elemento con delete()
        map.delete(0);
        //Muestro de nuevo los elementos para ver que se ha eliminado correctamente
        mostrarMap(map,"Muestro de nuevo los elementos para ver que se ha eliminado correctamente");
        //Muestro un elemento específico con get()
        console.log("Muestro un elemento específico");
        console.log(map.get(1));
        //Muestro el número de elementos que contiene mi map
        mostrarNumeroElementos(map,"Muestro el número de elementos que contiene mi map");
        //Elimino todos los elementos con clear()
        console.log("Elimino los elementos con clear()");
        map.clear();
        //Muestro de nuevo el número de elementos que contiene mi map para comprobar que se ha eliminado todo.
        mostrarNumeroElementos(map,"Muestro el número de elementos que contiene mi map despúes de realizar el clear()");


    }

    function mostrarMap(map,mensaje){
        console.log(mensaje);
        map.forEach(function(valor,clave){
            console.log(clave + " => " + valor);
        });
        
    }

    function mostrarNumeroElementos(map,mensaje){
        console.log(mensaje);
        console.log(map.size);
    }

    window.addEventListener("load", iniciar);
}