/**
 * Script de la ventana nueva del ejercicio apariencia de ventanas
 * Autor: José Rafael Álvarez Espino
 *
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 *     window.open()
 *     document.write() 
 *        Añade el esqueleto básico: html, head, title, body, ul...
 * */

{

    function iniciar() {
        document.getElementById("nuevaVentana").addEventListener('click', nuevaVentana);
    }

    function nuevaVentana() {
        let ventana = open("", "Ventana credada mediante botón", "width=350,height=250,top=0,left=0")
        let contenido = `<!--Ejercicio Apariencia de ventanas
            Autor: José Rafael Álvarez Espino-->
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Ejercicio apariencia de ventanas</title>
                    <script type="text/javascript" src="js/ventanaNueva.js"></script>
                </head>
                <body>
                    <noscript>
                        <p>Tienes deshabilitado javascript, para ver la página habilítelo.</p>
                    </noscript>
                    <p>Autor: José Rafael Álvarez Espino</p>
                    <p>Se han utilizado las siguientes propiedades</p>
                    <ul>
                        <li id="height"></li>
                        <li id="width"></li>
                    </ul>
                    <button id="cerrarVentana">Pulse aquí para cerrar la ventana</button>
                </body>
            </html>`

        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
    }

    window.addEventListener("load", iniciar);
}