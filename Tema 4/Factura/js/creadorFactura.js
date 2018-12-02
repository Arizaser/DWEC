{
    let tabla;
    let arrayLineas = ["nombreProducto", "cantidadProducto", "precioProducto", "ivaProducto"];
    let empresa = empresaTemporal;
    let muestraError;
    let inputNombreCliente;
    let inputDireccionCliente;
    let inputTelefonoCliente;
    let inputNifCliente;
    let divMuestraFactura;
    let buttonLimpiarDatosCliente;

    function init() {

        rellenarDatosEmpresa();
        muestraError = document.getElementById("muestraError");
        divMuestraFactura = document.getElementById("mostrarFactura");
        tabla = document.getElementById("tablaProductos");
        buttonLimpiarDatosCliente = document.getElementById("limpiarDatosCliente");
        inputNombreCliente = document.getElementById("nombreCliente");
        inputDireccionCliente = document.getElementById("direccionCliente");
        inputTelefonoCliente = document.getElementById("telefonoCliente");
        inputNifCliente = document.getElementById("nifCliente");
        buttonLimpiarDatosCliente.addEventListener("click", limpiarDatosCliente);
        document.getElementById("nuevoProducto").addEventListener("click", nuevaLinea);
        document.getElementById("crearFactura").addEventListener("click", crearFactura);
    }

    function rellenarDatosEmpresa() {
        document.getElementById("nombreEmpresa").textContent += empresa.nombre;
        document.getElementById("telefonoEmpresa").textContent += empresa.telefono;
        document.getElementById("direccionEmpresa").textContent += empresa.direccion;
        document.getElementById("nifEmpresa").textContent += empresa.nif;
    }

    function nuevaLinea() {
        let linea = document.createElement("tr");
        let td;
        let input;
        for (let i = 0; i < arrayLineas.length; i++) {
            td = document.createElement("td");
            input = document.createElement("input");
            input.id = arrayLineas[i]
            if (i == 0)
                input.type = "text";
            else
                input.type = "number";
            td.appendChild(input);
            linea.appendChild(td);
        }
        tabla.appendChild(linea);
    }

    function crearFactura() {
        try{
        let factura = new Factura(empresa, crearCliente(), recorrerTablaProductos());
        factura.calcularFactura();
        mostrarFactura(factura);
        }catch(e){
           muestraError.textContent = e.message;
        }

    }

    function mostrarFactura(factura) {
        let ivas = factura.informacion.obtenerIvaParaMostrar();
        let tablaIva = document.createElement("table");
        tablaIva.id = "tablaTotal";
        let fila;
        let td;
        for (let i = 0; i < ivas.length; i++) {
            fila = document.createElement("tr");
            td = document.createElement("td");
            td.appendChild(document.createTextNode(ivas[i][0] + "% IVA"));
            fila.appendChild(td);
            td = document.createElement("td");
            td.appendChild(document.createTextNode(ivas[i][1] + " \u20AC"));
            fila.appendChild(td);
            tablaIva.appendChild(fila);
        }
        //BASE IMPONIBLE
        fila = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(document.createTextNode("BASE IMPONIBLE"));
        fila.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(factura.informacion.baseImponible + "\u20AC"));
        fila.appendChild(td);
        tablaIva.appendChild(fila);

        //TOTAL
        fila = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(document.createTextNode("TOTAL"));
        fila.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(factura.informacion.total + "\u20AC"));
        fila.appendChild(td);
        tablaIva.appendChild(fila);
        console.log(tablaIva);

        tablaTotal = document.getElementById("tablaTotal");
        if (tablaTotal)
            divMuestraFactura.removeChild(tablaTotal);
        divMuestraFactura.appendChild(tablaIva);
    }

    function recorrerTablaProductos() {
        let productos = [];
        for (let i = 1; i < tabla.rows.length; i++) {
            productos.push(new Producto(
                tabla.rows[i].cells[0].childNodes[0].value,
                tabla.rows[i].cells[1].childNodes[0].value,
                tabla.rows[i].cells[2].childNodes[0].value,
                tabla.rows[i].cells[3].childNodes[0].value,
            ));
        }
        return productos;
    }

    function limpiarDatosCliente() {
        inputNombreCliente.value = "";
        inputDireccionCliente.value = "";
        inputTelefonoCliente.value = "";
        inputNifCliente.value = "";
    }

    function crearCliente() {
        let nombreCliente = document.getElementById("nombreCliente").value;
        let direccionCliente = document.getElementById("direccionCliente").value;
        let telefonoCliente = document.getElementById("telefonoCliente").value;
        let nifCliente = document.getElementById("nifCliente").value;
        return new Cliente(nombreCliente, direccionCliente, telefonoCliente, nifCliente);
    }


    window.addEventListener("load", init);
}