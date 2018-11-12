/**
 * Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Set. 
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = "Las salidas de información están en la consola";
        
        //Creo un objeto set pasándole como argumento un array.
        let set = new Set(["Mario Navarro","Javier González","Angelo Barbara","Rafael García"]);
        //Muestro los elementos que contiene
        mostrarSet(set,"Muestro los elementos");
        //Añadimos un alumno con el método add()
        set.add("Rafael Sojo");
        //Muestro de nuevo los elementos para ver que se ha añadido correctamente
        mostrarSet(set,"Muestro de nuevo los elementos para ver que se ha añadido correctamente");
        //Elimino un elemento con delete()
        set.delete("Mario Navarro");
        //Muestro de nuevo los elementos para ver que se ha eliminado correctamente
        mostrarSet(set,"Muestro de nuevo los elementos para ver que se ha eliminado correctamente");
        //Muestro un elemento específico con has()
        console.log("Compruebo si mi set contiene un elemento específico");
        console.log(set.has("Javier González"));
        //Muestro el número de elementos que contiene mi set
        mostrarNumeroElementos(set,"Muestro el número de elementos que contiene mi set");
        //Elimino todos los elementos con clear()
        console.log("Elimino los elementos con clear()");
        set.clear();
        //Muestro de nuevo el número de elementos que contiene mi set para comprobar que se ha eliminado todo.
        mostrarNumeroElementos(set,"Muestro el número de elementos que contiene mi set despúes de realizar el clear()");


    }

    function mostrarSet(set,mensaje){
        console.log(mensaje);
        set.forEach(function(valor){
            console.log(valor);
        });
        
    }

    function mostrarNumeroElementos(set,mensaje){
        console.log(mensaje);
        console.log(set.size);
    }

    window.addEventListener("load", iniciar);
}