/**
 * @author Mario Navarro Madrid
 */
$(function () {

    //Objeto creado para las opciones
    const options = {
        //Realizar animación al redimensionar
        animate: true,
        //Muestra la clase indicada cuando se está redimensionando
        helper: "ui-resizable-helper",
        //Duración de la animación
        animateDuration: "fast",
        //Tipo de animación, para verlas todos consultar la API de Easing
        animateEasing: "easeOutBounce",
        //Altura máxima al redimensionar
        maxHeight: 250,
        //Anchuar máxima al redimensionar
        maxWidth: 350,
        //Altura mínima al redimensionar
        //minHeight: 150,
        //Anchuar mínima al redimensionar
        //minWidth: 200,
        //Proporción de aspecto al redimensionar
        aspectRatio: 4 / 3,
        //Permite redimensionar en base a una cuadrícula
        grid: 20,
        //Muestra un sombreado de la caja al redimensionar
        ghost: true,
        //Ocultar el icono de redimensionar cuando el foco no está en el elemento
        autoHide: true,
        //Permite redimensionar otro elemento a la vez que el seleccionado
        //alsoResize: "#resizable2"
    }

    //Permite el redimensionado de elementos
    $("#resizable").resizable(options);
    $("#resizable2").resizable({
        //Limita el redimensionado a la clase indicada o padre
        containment: "#container",
        animate :true,
        ghost: true
    });
});