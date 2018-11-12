/**
 * Crea mediante iterables estos dos objetos collections. Indica el número de elementos de cada uno. Justifica el comportamiento: 
 * b = new WeakSet([{}, {}]);
 * o = {};  a = new WeakSet([o, o]);
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        let b = new WeakSet([{}, {}]);
        let o = {};
        let a = new WeakSet([o, o]);
        informacion.innerHTML = "La información se muestra en consola";
        console.log(b);
        console.log(a);
        console.log("Podemos ver que el primer WeakSet (a) contiene dos objetos ya que, aunque tenga la misma información, tienen distinta referencia en memoria");
        console.log("Sin embargo, el segundo WeakSet (b) contiene solo un objeto ya que los dos objetos que se intentaron añadir tienen la misma referencia en memoria")
        
    }

    
    window.addEventListener("load", iniciar);
}