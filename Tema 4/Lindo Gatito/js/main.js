{   
   let muestraError;
    function init(){
        document.getElementById("crearGato").addEventListener("click",crearGato);
        muestraError = document.getElementById("muestraError");
    }

    function crearGato(){
        let nombre = document.getElementById("nombre").value;
        let fechaNacimiento = document.getElementById("fechaDeNacimiento").value;
        let raza = document.getElementById("raza").value;
        let peso = document.getElementById("peso").value;
        
        try{
            crearNuevaVentana(new Gato(nombre, fechaNacimiento, raza, peso))
        }catch(e){
            muestraError.textContent = e.message;
        }  
    }

    function crearNuevaVentana(gato){
        let ventana = window.open("","","width=500,height=600");
        let contenido = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Gatito</title>
            <link rel="stylesheet" href="css/styleNuevaVentana.css">
            <link href="https://fonts.googleapis.com/css?family=Patrick+Hand" rel="stylesheet">
            <script src="js/controlGato.js"></script>
        </head>
        
        <body>
            <h1>Panel de control del gato</h1>
            <main>
                <div id="informacionGato">
                    <p id="nombre">Nombre del gato: </p>
                    <p id="fechaDeNacimiento">Fecha de nacimiento: </p>
                    <p id="edad">Edad: </p>
                    <p id="raza">Raza: </p>
                    <p id="peso">Peso: </p>
                </div>
                <div id="panelDeControl">
                    <img id="imagenGato" src="images/gato.jpg" alt=""><br>
                    <button id="jugar">Jugar</button>
                    <button id="comer">Comer</button>
                    <button id="dormir">Dormir</button>
                </div>
            </main>
            <p id="informacionActual"><p>
        </body>
        
        </html>`;
        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
        ventana.gato = gato;
    }

    window.addEventListener("load", init);
}