/**
 *El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. 
 * Muéstralos reaccionando al evento scroll sobre window.
 * */

{
    
    function iniciar() {
        //asignarContenido();
        document.addEventListener("scroll",asignarContenido);
        
    }
    function asignarContenido(){
        let informacion = document.getElementById("informacion");
        informacion.innerHTML = "window.scrollX= " + window.scrollX + "<br>";
        informacion.innerHTML += "window.scrollY= " + window.scrollY + "<br>";
        informacion.innerHTML += "window.scrollbars= " + window.scrollbars.visible;
    }


    window.addEventListener("load", iniciar);
}