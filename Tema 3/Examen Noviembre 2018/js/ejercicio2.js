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
        document.getElementById("atras").addEventListener("click",function(){
            history.back();
        })
    }

    function mostrarInformacion() {
        console.log("hola");
        try {
            let [,apellidos, , , nombre] = comprobarInformacionValida(this.value);
            asignarInformacion(nombre, apellidos);
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
            throw "Error. Formato correcto: Cuadrado Perfecto"
        return regexNombre.exec(cadena);
    }

    function agregarALaColeccion(nombre, apellidos) {
        let persona = (nombre + " " + apellidos).trim();
        console.log(persona);
        if (collectionNombres.has(persona)) {
            informaError.innerHTML = "REPETIDO";
        } else
            collectionNombres.add(persona);
    }

    window.addEventListener("load", init);
}