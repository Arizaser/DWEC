/**
 * Indica la desventaja de realizar esta modificación sobre el objeto 
 * wS = new WeakSet(); wS.add({numero: 1});
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = `Indica la desventaja de realizar esta modificación sobre el objeto: <br>
        wS = new WeakSet(); wS.add({numero: 1}): <br>
        La desventaja es que no tenemos la referencia del objeto, por lo que no podemos buscarlo ni eliminarlo`;
    }

    
    window.addEventListener("load", iniciar);
}