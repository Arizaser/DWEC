/**
 * Script de la ventana nueva del ejercicio multiples ventanas
 * Autor: José Rafael Álvarez Espino
 *
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 *      miVentana = window.open('','','width=200,height=200');
 *      miVentana.document.open();
 *      miVentana.document.write() 
 *          Añade el esqueleto básico: html, head, title, body, ul...
 * */

{

    function iniciar() {
        document.getElementById("nuevaVentana").addEventListener('click', crearVentanas);
    }

    function crearVentanas() {
        let top = 10;
        let left = 10;
        for (let i = 0; i < 5; i++) {
            let ventana = open("", "Ventana "+i, "width=300,height=200,top="+top+",left="+left+"");
            let contenido = `<!--Ejercicio Apariencia de ventanas
            Autor: José Rafael Álvarez Espino-->
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Ventana `+i+`</title>
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
            top += 10;
            left += 10;
        }

    }

    window.addEventListener("load", iniciar);
}