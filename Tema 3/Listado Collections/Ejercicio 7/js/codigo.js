/**
 * Analiza el siguiente enlace Javascript Set vs. Array performance y responde a las siguientes preguntas con respecto al rendimiento:
 *      Al añadir elementos. Métodos utilizados.
 *      Al modificar elementos. Métodos utilizados.
 *      Al eliminar elementos. Métodos utilizados.
 * */

{
    function iniciar() {
        mostrarInformacion(document.getElementById("informacion"));
    }

    function mostrarInformacion(informacion) {
        informacion.innerHTML = `
        Al añadir elementos. Métodos utilizados: Usado el método push para array (2.2001953125ms) y el método add para Set (0.02001953125ms). Es más rapido Set. <br>
        Al modificar elementos. Métodos utilizados: Usa un for más un método que genera un sexo aleatoriamente para array (15 ms) y un for of más un método que genera un sexo aleatorio para Set (34 ms). Es más rápido array.<br>
        Al eliminar elementos. Métodos utilizados: Usa un for más el método splice para array (0.47607421875ms) y un for of más el método delete para Set (0.02099609375ms). Es más rápido Set. <br>
        `;

    }
    window.addEventListener("load", iniciar);
}