/**
 * Script del ejercicio 15
 * Autor: José Rafael Álvarez Espino
 */

/**
  * Completar el código JavaScript proporcionado para que:
  *     Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página:
  *     Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su funcionamiento a partir de su código fuente.
  *     Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada:
  *     Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.

  * */

{   
    let info;
    document.addEventListener("DOMContentLoaded", iniciar);

    function iniciar(){
        info = document.getElementById("info");
        document.addEventListener('mousemove',informacion);
        document.addEventListener('keypress',informacion);
        document.addEventListener('click',informacion);
    }

    function informacion(elEvento){
        switch(elEvento.type){
            case 'mousemove':
                info.style.background = '#FFF'
                let coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;
                coordenadaXabsoluta = elEvento.pageX;
                coordenadaXrelativa = elEvento.clientX;
                coordenadaYabsoluta = elEvento.pageY;
                coordenadaYrelativa = elEvento.clientY;
                muestraInformacion(['Ratón', 'Navegador ['+coordenadaXrelativa+', '+coordenadaYrelativa+']', 'Pagina ['+coordenadaXabsoluta+', '+coordenadaYabsoluta+']']);
            break;
            case 'keypress':
                info.style.background = '#CCE6FF';
                let letra = String.fromCharCode(elEvento.charCode);
                let codigo = letra.charCodeAt(0);
                muestraInformacion(['Teclado', 'Carácter ['+letra+']', 'Código ['+codigo+']']);
            break;
            case 'click':
                info.style.backgroundColor = '#FFFFCC';
            break;
        }
    }
    
    function muestraInformacion(mensaje) {
        info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
        for(var i=1; i<mensaje.length; i++) {
            info.innerHTML += '<p>'+mensaje[i]+'</p>';
        }
    }
    
}