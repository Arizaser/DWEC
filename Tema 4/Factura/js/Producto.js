function Producto(descripcion, cantidad, precio, iva) {
    this.setDescripcion(descripcion);
    this.setCantidad(cantidad);
    this.setPrecio(precio);
    this.setIva(parseInt(iva));
}

Producto.prototype.setDescripcion = function(descripcion){
    if(descripcion == "")
        throw new Error("La descripci\u00F3n no puede estar vac\u00EDa");
    this.descripcion = descripcion;
}
Producto.prototype.setCantidad = function(cantidad){
    if(cantidad == "")
        throw new Error("La cantidad no puede estar vac\u00EDa");
    this.cantidad = cantidad;
}
Producto.prototype.setPrecio = function(precio){
    if(precio == "")
        throw new Error("El precio no puede estar vac\u00EDo");
    this.precio = precio;
}
Producto.prototype.setIva = function(iva){
    if(isNaN(iva))
        throw new Error("El iva no puede estar vac\u00EDo");
    this.iva = iva;
}