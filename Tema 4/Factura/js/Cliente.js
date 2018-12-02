let regexNIF = new RegExp("^([\\d]{8})[-\\s]*([A-Z(^IÑOU)])$");
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function Cliente(nombre, direccion, telefono, dni) {
    this.setNombre(nombre);
    this.setDireccion(direccion);
    this.setTelefono(telefono);
    this.setDNI(dni.toUpperCase().trim());
}
Cliente.prototype.setNombre = function (nombre) {
    if (nombre == "")
        throw new Error("El nombre del cliente no puede estar vac\u00EDo");
    this.nombre = nombre;
}
Cliente.prototype.setDireccion = function (direccion) {
    if (direccion == "")
        throw new Error("La direcci\u00F3n del cliente no puede estar vac\u00EDa");
    this.direccion = direccion;
}
Cliente.prototype.setTelefono = function (telefono) {
    if (telefono == "")
        throw new Error("El tel\u00E9fono del cliente no puede estar vac\u00EDo");
    this.telefono = telefono;
}
Cliente.prototype.setDNI = function(dni){
    this.comprobarDNI(dni);
    this.dni = dni;
}

Cliente.prototype.comprobarDNI = function(dni){
    if(dni.length == 0)
        throw new Error("No has introducido DNI");
    else if (!regexNIF.test(dni))
        throw new Error("El formato del DNI es incorrecto");
    let [,numeroDNI,letraDNI] = regexNIF.exec(dni);
    if(letras[numeroDNI % 23] != letraDNI)
        throw new Error("El DNI no es correcto");
}