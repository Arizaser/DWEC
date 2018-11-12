/**
 * Responde verdadero falso:
 * Tanto WeakSet como Set almacenan valores únicos
 * WeakSet sólo almacena Objetos
 * La estructura Set autoelimina los objetos que no tienen referencia 
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = `Responde verdadero falso: <br>
        * Tanto WeakSet como Set almacenan valores únicos: Verdadero<br>
        * WeakSet sólo almacena Objetos: Verdadero<br>
        * La estructura Set autoelimina los objetos que no tienen referencia: Falso  `;
        
    }

    
    window.addEventListener("load", iniciar);
}