/**
 *Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * */

{
    
    function iniciar() {
        let informacion = document.getElementById("informacion");
        informacion.innerHTML = "URL: "+location.href+ "<br/>";
        informacion.innerHTML += "Protocolo: "+location.protocol+ "<br/>";
        informacion.innerHTML += "Host: "+location.host+ "<br/>";
        informacion.innerHTML += "Hostname: "+location.hostname+ "<br/>";
        informacion.innerHTML += "Puerto: "+location.port+ "<br/>";
        informacion.innerHTML += "Pathname: "+location.pathname+ "<br/>";
        informacion.innerHTML += "Hash: "+location.hash+ "<br/>";
        informacion.innerHTML += "Origen: "+location.origin+ "<br/>";
    }

    window.addEventListener("load", iniciar);
}