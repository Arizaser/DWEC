/**
 * Script factura 
 * @author José Rafael Álvarez Espino
 */

{
    let nombreEmpresa;
    let direccionEmpresa;
    let telefonoEmpresa;
    let nifEmpresa;
    let muestraError;
    function iniciar() {
        muestraError = document.getElementById("muestraError");
        nombreEmpresa = document.getElementById("nombre");
        direccionEmpresa = document.getElementById("direccion");
        telefonoEmpresa = document.getElementById("telefono");
        nifEmpresa = document.getElementById("nif");
        document.getElementById("irAlCreador").addEventListener("click",irAlCreador);
    }

    function irAlCreador(){
        try{
            crearNuevaVentana(new Empresa(nombreEmpresa.value,direccionEmpresa.value,telefonoEmpresa.value,nifEmpresa.value));
        }catch(e){
            muestraError.textContent = e.message;
        }
    }

    function crearNuevaVentana(empresa){
        let ventana = window.open("","");
        let contenido = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Creador factura</title>
            <link rel="stylesheet" href="css/styleCreador.css">
            <script src="js/Cliente.js"></script>
            <script src="js/Factura.js"></script>
            <script src="js/Informacion.js"></script>
            <script src="js/Producto.js"></script>
            <script src="js/creadorFactura.js"></script>
        
        </head>
        
        <body>
            <div id="informacionEmpresaCliente">
                <div id="informacionEmpresa">
                    <p id="tituloInformacion">Información de la empresa: </p>
                    <p id="nombreEmpresa">Nombre de la empresa: </p>
                    <p id="direccionEmpresa">Dirección de la empresa: </p>
                    <p id="telefonoEmpresa">Teléfono de la empresa: </p>
                    <p id="nifEmpresa">NIF de la empresa: </p>
                </div>
                <div id="informacionCliente">
                    <p id="tituloInformacion">Información del cliente: </p>
                    <label>Nombre del cliente: </label><input id="nombreCliente" type="text"><br>
                    <label>Dirección del cliente: </label><input id="direccionCliente" type="text"><br>
                    <label>Teléfono del cliente: </label><input id="telefonoCliente" type="number"><br>
                    <label>NIF del cliente: </label><input id="nifCliente" type="text"><br>
                    <button id="limpiarDatosCliente">Limpiar datos</button>
                </div>
            </div>
            <p id="muestraError"></p>
            <div id="productos">
                <table id="tablaProductos">
                    <tr>
                        <th>Descripción del producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>IVA</th>
                    </tr>
                    <tr>
                        <td><input type="text" id="nombreProducto"></td>
                        <td><input type="number" id="cantidadProducto"></td>
                        <td><input type="number" id="precioProducto"></td>
                        <td><input type="number" id="ivaProducto"></td>
                    </tr>
                </table>
            </div>
            <div id="botones">
                <button id="nuevoProducto">Añadir nuevo producto</button>
                <button id="crearFactura">Crear factura</button>
                <button id="limpiarDatosProducto">Limpiar datos</button>
            </div>
            <div id="mostrarFactura">       
            </div>
        </body>
        
        </html>`;
        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
        ventana.empresaTemporal = empresa;
    }

    window.addEventListener("load", iniciar);
}
