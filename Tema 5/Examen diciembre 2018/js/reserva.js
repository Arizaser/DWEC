function Reserva(nombreCliente, correoCliente, fecha, horaLlegada, noches, personas, servicioRestaurante, edadCliente){
    this.setNumeroDeReserva();
    this.setNombre(nombreCliente);
    this.setCorreoCliente(correoCliente);
    this.setFecha(fecha);
    this.setHoraLlegada(horaLlegada);
    this.setNoches(noches);
    this.setPersonas(personas);
    this.setServicioRestaurante(servicioRestaurante);
    this.setEdadCliente(edadCliente);
}
Reserva.numeroDeReserva = 1;

Reserva.prototype.setNumeroDeReserva = function() {
    this.numeroDeReserva = Reserva.numeroDeReserva;
    Reserva.numeroDeReserva++;
}

Reserva.prototype.setNombre = function (nombreCliente) {
    if(nombreCliente == "")
        throw new Error("El nombre del cliente no puede estar vacío");
    this.nombreCliente = nombreCliente;
}
Reserva.prototype.setCorreoCliente = function (correoCliente) {
    if(correoCliente == "")
        throw new Error("El correo del cliente no puede estar vacío");
    this.correoCliente = correoCliente;
}
Reserva.prototype.setFecha = function (fecha) {
    if(fecha == "")
        throw new Error("La fecha no puede estar vacía");
    this.fecha = this.calcularFecha(fecha);
}
Reserva.prototype.setHoraLlegada = function (horaLlegada) {
    if(horaLlegada == "")
        throw new Error("La hora de llegada no puede estar vacía");
    this.horaLlegada = horaLlegada;
}
Reserva.prototype.setNoches = function (noches) {
    if(noches == "")
        throw new Error("El número de noches no puede estar vacío");
    this.noches = noches;
}
Reserva.prototype.setPersonas = function (personas) {
    if(personas == "")
        throw new Error("El número de personas no puede estar vacío");
    this.personas = personas;
}
Reserva.prototype.setServicioRestaurante = function (servicioRestaurante) {
    this.servicioRestaurante = servicioRestaurante;
}
Reserva.prototype.setEdadCliente = function (edadCliente) {
    if(edadCliente == "")
        throw new Error("La edad del cliente no puede estar vacía");
    this.edadCliente = edadCliente;
}

Reserva.prototype.calcularFecha = function (fecha) {
    let [dia,mes,annio] = fecha.split("/");
    return new Date(mes+"/"+dia+"/"+annio);
}

Reserva.prototype.calcularDiasRestantes = function () {
    return Math.ceil((this.fecha.getTime() - new Date().getTime())/(1000*60*60*24));    
}

Reserva.prototype
Reserva.prototype.mostrar = function() {
    let ventana = open("","","height=300px;width=200px");
    let mensaje = `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Información de la reserva</title>
    </head>
    <body>
        <p>Nombre de reserva: ${this.numeroDeReserva}<p>
        <p>Nombre del cliente: ${this.nombreCliente}<p>
        <p>Correo del cliente: ${this.correoCliente}<p>
        <p>Fecha: ${this.fecha}<p>
        <p>Hora de llegada: ${this.horaLlegada}<p>
        <p>Días restantes: ${this.calcularDiasRestantes()}<p>
        <p>Nº de noches: ${this.noches}<p>
        <p>Nº de personas: ${this.personas}<p>
        <p>Servicio de restaurante: ${this.servicioRestaurante}<p>
        <p>Edad del cliente: ${this.edadCliente}<p>
    </body>
    </html>`;
    ventana.document.open();
    ventana.document.write(mensaje);
    ventana.document.close();
}