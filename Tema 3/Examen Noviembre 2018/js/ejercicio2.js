//José Rafael Álvarez Espino. Examen noviembre 2018
{
    let collectionNombres;
    let informaError;
    let muestraNombre;
    let muestraApellidos;
    let entradaDatos;
    const regexNombre = new RegExp("^\\s*(([a-zA-Záéíóúñ]*)\\s*([a-zA-Záéíóúñ]*)),\\s*([a-zA-Záéíóúñ]*)\\s*$");

    function init() {
        collectionNombres = new Set();
        entradaDatos = document.getElementById("entradaDatos");
        entradaDatos.addEventListener("blur", mostrarInformacion);
        informaError = document.getElementById("informaError");
        muestraNombre = document.getElementById("muestraNombre");
        muestraApellidos = document.getElementById("muestraApellidos");
        document.getElementById("atras").addEventListener("click",function(event){
            event.preventDefault();
            history.back();
        })
    }

    function mostrarInformacion() {
        try {
            let [,apellidos, , , nombre] = comprobarInformacionValida(this.value);
            apellidos = apellidos.replace(/[ ]+/g," ");
            asignarInformacion(nombre.trim(), apellidos.trim());
            limpiarEntradaDatos();
            agregarALaColeccion(nombre, apellidos);

        } catch (e) {
            informaError.innerHTML = e;
        }
    }

    function limpiarEntradaDatos() {
        entradaDatos.value = "";
        informaError.innerHTML = "";
    }

    function asignarInformacion(nombre, apellidos) {
        muestraNombre.innerHTML = "Nombre: "+nombre;
        muestraApellidos.innerHTML = "Apellidos: "+apellidos;
    }

    function comprobarInformacionValida(cadena) {
        if (!regexNombre.test(cadena))
            throw new Error("Error. Formato correcto: Cuadrado Perfecto, Anacleto");
        return regexNombre.exec(cadena);
    }

    function agregarALaColeccion(nombre, apellidos) {
        let persona = (nombre+ " " + apellidos);
        if (collectionNombres.has(persona)) {
            informaError.innerHTML = "REPETIDO";
        } else
            collectionNombres.add(persona);
    }

    window.addEventListener("load", init);
}