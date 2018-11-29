{
    function Gato(nombre, fechaNacimiento, raza, peso) {
        this.setNombre(nombre);
        this.setFechaNacimiento(fechaNacimiento);
        this.setRaza(raza);
        this.setPeso(peso);
    }
    
    Gato.prototype.setNombre = function (nombre) {
        if (nombre == "")
            throw new Error("El nombre no puede estar vacío");
        this.nombre = nombre;
    }
    Gato.prototype.setFechaNacimiento = function (fechaNacimiento) {
        if (!this.isFechaValida(fechaNacimiento))
            throw new Error("La fecha de nacimiento es incorrecta");
        this.fechaNacimiento = new Date(fechaNacimiento);
    }
    Gato.prototype.setRaza = function (raza) {
        if (raza == "")
            throw new Error("La raza no puede estar vacía");
        this.raza = raza;
    }
    Gato.prototype.setPeso = function (peso) {
        if (!this.isPesoValido(peso))
            throw new Error("El peso debe estar entre 1 y 15");
        this.peso = peso;
    }
    Gato.prototype.comprobarEstado = function () {
        if (!this.isPesoValido(this.peso))
            throw new Error(this.nombre+" ha pasado a mejor vida.");
    }
    Gato.prototype.isPesoValido = function (peso) {
        return peso >= 1 && peso <= 15 && peso != "";
    }
    Gato.prototype.isFechaValida = function(fechaNacimiento){
        return fechaNacimiento != "" && new Date(fechaNacimiento) <= new Date() ;
    
    }
    Gato.prototype.jugar = function () {
        this.comprobarEstado();
        this.peso--;
        this.comprobarEstado();
    }
    Gato.prototype.comer = function () {
        this.comprobarEstado();
        this.peso++;
        this.comprobarEstado();
    }
    Gato.prototype.dormir = function(){
        this.comprobarEstado();
        return "ZzzZzz";
    }
    Gato.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento.getDate() + "/" + (this.fechaNacimiento.getMonth() + 1) + "/" + this.fechaNacimiento.getFullYear();
    }
    Gato.prototype.calcularEdad = function () {
        let hoy = new Date();
        let dia = hoy.getDate() - this.fechaNacimiento.getDate();
        let mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        let annios = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    
        if (mes < 0 || (mes == 0 && dia < 0))
            annios--;
        if (annios == 0) {
            let meses = (hoy.getFullYear() - this.fechaNacimiento.getFullYear()) * 12;
            meses -= this.fechaNacimiento.getMonth();
            meses += hoy.getMonth();
    
            if (hoy.getDate() < this.fechaNacimiento.getDate())
                meses--;
    
            this.fechaNacimiento.setMonth(this.fechaNacimiento.getMonth() + meses);
            let dias = (hoy.getTime() - this.fechaNacimiento.getTime()) / (1000 * 60 * 60 * 24);
            dias = Math.floor(dias);
            return [meses, dias];
    
        }
        return annios;
    }
    
}
