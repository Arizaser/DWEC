//José Rafael Álvarez Espino. Examen noviembre 2018

{
    let informacion;
    function init(){
        informacion = document.getElementById("informacion");
        crearContador();
        incrementarContador();
        mostrarContenido();
        document.getElementById("resetear").addEventListener("click",resetearContador);
        document.getElementById("atras").addEventListener("click",function(event){
            event.preventDefault();
            history.back();
        })
    }

    function crearContador(){
        if(localStorage.getItem("contador") == null){
            localStorage.setItem("contador",0);
        }
    }

    function incrementarContador(){
        let valorContador = localStorage.getItem("contador");
        valorContador++;
        localStorage.setItem("contador",valorContador);
    }

    function resetearContador(){
        if(localStorage.getItem("contador") != null){
            localStorage.setItem("contador",0);
            informacion.innerHTML = "RESETEADO";
        }
    }

    function mostrarContenido(){
        informacion.innerHTML = generaMensaje(localStorage.getItem("contador"));
    }

    function generaMensaje(contador){
        switch(contador){
            case "1":
                return "Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas";
            case "2":
                return "Hola de nuevo. Ya estás aquí por segunda vez. ¿Volveremos a vernos?";
            default:
                return `Ya empiezas a ser pesado. Esta es la vez número ${contador} que entras. Sigue con tus cosas`;
        }
    }
    window.addEventListener("load",init);
}