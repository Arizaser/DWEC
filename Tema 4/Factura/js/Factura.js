function Factura(empresa, cliente, productos) {
    this.empresa = empresa;
    this.cliente = cliente;
    this.setFecha(new Date())
    this.productos = productos;
    this.informacion = new Informacion(0, [], 0);
}

Factura.prototype.setFecha = function(fecha){
    this.fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
}

Factura.prototype.calcularFactura = function () {
    let totalProducto;
    for (let producto of this.productos) {
        totalProducto = producto.cantidad * producto.precio;
        this.informacion.baseImponible += totalProducto;
        this.informacion.agregarIva(producto.iva,totalProducto);
    }
    this.informacion.total = this.informacion.baseImponible + this.informacion.calcularIva();
}

Factura.prototype.mostrarTotal = function () {
    return this.informacion.total;
}