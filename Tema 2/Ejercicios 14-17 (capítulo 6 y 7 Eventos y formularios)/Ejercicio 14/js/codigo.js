/**
 * Script del ejercicio 14
 * Autor: José Rafael Álvarez Espino
 */

/**
  * A partir de la página web proporcionada, completar el código JavaScript para que:
  *     Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
  *     Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
  *     Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
  *     Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
  * */

{
    document.addEventListener("DOMContentLoaded", iniciar);

    function iniciar() {
        document.getElementById("enlace1").addEventListener("click", clic_enlace);
        document.getElementById("enlace2").addEventListener("click", clic_enlace);
        document.getElementById("enlace3").addEventListener("click", clic_enlace);
    }

    function clic_enlace() {
        let enlace = document.getElementById(this.id);
        let contenidos = document.getElementById('contenidos' + this.id.charAt(6));

        if (contenidos.style.display == "") {
            contenidos.style.display = "none";
            enlace.innerHTML = "Mostrar contenido";
        } else {
            contenidos.style.display = "";
            enlace.innerHTML = "Ocultar contenido";
        }
    }
}