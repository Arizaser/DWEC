{
    let canvas;
    let arrayColores = ["#0D0630", "#18314F", "#384E77", "#8BBEB2" , "#F7FF58", "#FF934F", "#5E565A", "#7E007B", "#735CDD", "#37000A"];

    function init(){

        canvas = Array.from(document.getElementsByTagName("canvas"));

        canvas.forEach(function(elemento){ 
            elemento.addEventListener(elemento.getAttribute("id"), function(event){
                pintaCanvas(elemento,obtenerColorAleatorio(),event.offsetX,event.offsetY, event.button, event.buttons);
            });
            pintaCanvas(elemento);
        });

    }

    function obtenerColorAleatorio(){
        return Math.floor(Math.random() * arrayColores.length + 0);
    }

    function pintaCanvas(canvas,color, x, y, button, buttons){
        
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d',{alpha:false});
            if (arguments.length === 1){
                ctx.fillStyle = '#FF521B';
            }else{
                ctx.fillStyle = arrayColores[color];
            }
            ctx.fillRect(0, 0, 400, 400);
            ctx.fillStyle = "#fff";
            ctx.fillText(canvas.getAttribute("id"), 50, 30);
            if (arguments.length > 1){
                ctx.fillText("x = " + x, 210, 40);
                ctx.fillText("y = " + y, 210, 70);
                ctx.fillText("button = " + button, 190, 100);
                ctx.fillText("buttons = " + buttons, 190, 130);
            }
        }
    }

    window.addEventListener("load", init);
}