/**
 * Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection WeakweakSet . 
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = "Las salidas de información están en la consola";
        
        //Creo un objeto weakSet vacío.
        let weakSet = new WeakSet();
        //Creo los objetos con los nombres de los alumnos
        alumno1 = {nombre: "Mario", apellido: "Navarro"};
        alumno2 = {nombre: "Javier", apellido: "González"};
        alumno3 = {nombre: "Angelo", apellido: "Navarro"};
        alumno4 = {nombre: "Rafael", apellido: "García"};
        alumno5 = {nombre: "Rafael", apellido: "Sojo"}
        console.log("Alumnos creados");
        //Añadimos los alumnos con el método add()
        weakSet.add(alumno1);
        weakSet.add(alumno2);
        weakSet.add(alumno3);
        weakSet.add(alumno4);
        weakSet.add(alumno5);
        console.log("Alumnos añadidos");
        //Muestro un elemento específico con has()
        console.log("Compruebo si mi weakSet contiene el elemento alumno1");
        console.log(weakSet.has(alumno1));
        //Elimino un elemento con delete()
        console.log("Elimino alumno1 con delete");
        weakSet.delete(alumno1);
        //Muestro un elemento específico con has()
        console.log("Compruebo de nuevo si mi weakSet contiene el elemento alumno1");
        console.log(weakSet.has(alumno1));
    }

    window.addEventListener("load", iniciar);
}