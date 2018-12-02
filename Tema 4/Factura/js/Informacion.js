function Informacion(baseImponible, iva, total) {
    this.baseImponible = baseImponible;
    this.iva = iva;
    this.total = total;
}

Informacion.prototype.setBaseImponible = function (baseImponible) {
    if (isNaN(baseImponible))
        throw new Error("La base imponible debe de ser un número");
    this.baseImponible = baseImponible;
}

Informacion.prototype.setIva = function (iva) {
    if (isNaN(iva))
        throw new Error("El IVA debe de ser un número");
    this.iva = iva;
}

Informacion.prototype.agregarIva = function(iva, totalProducto){
    let encontrado = false;
    for (let i = 0; i < this.iva.length; i++) {
        if(this.iva[i][0] == iva){
            this.iva[i][1] += totalProducto;
            encontrado = true;
        }
    }
    if(!encontrado){
        this.iva.push([iva,totalProducto]);
    }
}

Informacion.prototype.calcularIva = function(){
    let total = 0;
    for (let i = 0; i < this.iva.length; i++) {
        total += (this.iva[i][0] * this.iva[i][1]) / 100;
    }

    return total;
}

Informacion.prototype.obtenerIvaParaMostrar = function(){
    let ivaParaMostrar = [];
    for (let i = 0; i < this.iva.length; i++) {
        ivaParaMostrar.push([this.iva[i][0],(this.iva[i][0] * this.iva[i][1]) / 100]);
    }

    return ivaParaMostrar;
}

Informacion.prototype.setTotal = function (total) {
    if (isNaN(total))
        throw new Error("El total debe de ser un número");
    this.total = total;
}