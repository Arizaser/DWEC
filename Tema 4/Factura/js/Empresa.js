function Empresa(nombre, direccion, telefono, nif) {
    this.setNombre(nombre);
    this.setDireccion(direccion);
    this.setTelefono(telefono);
    this.setNif(nif);
}

Empresa.prototype.setNombre = function (nombre) {
    if (nombre == "")
        throw new Error("El nombre no puede estar vacío");
    this.nombre = nombre;
}

Empresa.prototype.setDireccion = function (direccion) {
    if (direccion == "")
        throw new Error("La dirección no puede estar vacía");
    this.direccion = direccion;
}

Empresa.prototype.setTelefono = function (telefono) {
    if (isNaN(telefono))
        throw new Error("El telefono introducido no es válido");
    this.telefono = telefono;
}

Empresa.prototype.setNif = function (nif) {
    if (nif == "")
        throw new Error("El NIF no puede estar vacío");
    this.nif = nif;
}