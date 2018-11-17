//José Rafael Álvarez Espino. Examen noviembre 2018
{
    function init(){
        document.getElementById("ejercicio1").addEventListener("click",function(){
            window.open("ejercicio1.html","_self");
        })
        document.getElementById("ejercicio2").addEventListener("click",function(){
            window.open("ejercicio2.html","_self");
        })
    }
    
    window.addEventListener("load",init);
}