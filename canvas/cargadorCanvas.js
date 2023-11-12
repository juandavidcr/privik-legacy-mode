
window.onload = dibujar;//ejecutar la funcion dibujar cuando el DOM este listo
function dibujar()
{
     
      //Asignar nuestro elemento canvas a una variable

      var lienzo = document.getElementById ('lienzo');
      //crear el objeto contexto HTML5 para habilitar los metodos de dibujar
      if (lienzo.getContext) {
      var ctx = lienzo.getContext('2d');
      var centerX = lienzo.width / 2;
      var centerY = lienzo.height / 2;
      var radius = 50;
      //rgba(red,green,blue,opacity)max=255
      //fillRect(x,y,w,h)
      //casa color
      
      
      //imagen
      var imagen = new Image();
      imagen.src ='images/isla.jpg';
      imagen.onload = function(){
        ctx.drawImage(imagen,0,0);
        ctx.fillStyle = "rgba(125, 0, 255,0.7)";
      //casa figura
      ctx.fillRect (100,170,250,100);
      //otro rect
      ctx.fillStyle = "rgba(125, 0, 2,0.7)";
      ctx.fillRect (100,170,125,100);
       //puerta
      ctx.fillStyle = "rgba(40, 30, 0, 1)";
      ctx.fillRect (120,210,20,60);
      //la nave
      ctx.fillStyle = "rgba(0, 0, 155,1)";
      ctx.fillRect (170,170,30,30);

      ctx.fillStyle = "rgba(0, 0, 0,1)";
      ctx.fillRect (370,239,120,30);

      ctx.fillStyle = "rgba(0, 0, 0,1)";
      ctx.fillRect (390,200,70,50);
 
       ctx.fillStyle = "rgba(255,255 ,255, 0.8)";
       ctx.fillRect (400,200,40,24);
       //volante
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "silver";
      ctx.arc(395, 235, 5, 0, 1.7 * Math.PI, true);
      ctx.stroke(); 

//el sol
      ctx.beginPath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = "yellow";
      ctx.arc(30, 20, 50, 0, 2 * Math.PI, true);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 15;
      ctx.strokeStyle = "#ff5400";
      ctx.arc(30, 20, 50, 0, 2 * Math.PI, true);
      ctx.stroke();
 
      ctx.beginPath();
      ctx.fillStyle = "#f60";
      ctx.arc(30, 20, 50, 0, 2 * Math.PI, true);
      ctx.fill();
      //ventanita de la puerta circular  
      ctx.beginPath();
      ctx.arc(centerX-170, centerY-30, radius/64, 0, 2.0 * Math.PI); //el circulo completo es 2*Math.PI
      ctx.fillStyle = "#8ED6FF";
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "black";
      ctx.stroke();

       ctx.beginPath();
       ctx.arc(centerX-165, centerY-10, radius/64, 0, 2.0 * Math.PI); //el circulo completo es 2*Math.PI
       ctx.fillStyle = "yellow";
       ctx.fill();
       ctx.lineWidth = 5;
       ctx.strokeStyle = "silver";
       ctx.stroke();
      
       ctx.moveTo(125,120);  // Punto inicial de la línea
       ctx.lineTo(40,30);
       ctx.strokeStyle="#d40"  
       ctx.lineCap = "round";
       ctx.stroke();
       ctx.moveTo(125,60);  // Punto inicial de la línea
       ctx.lineTo(40,30);
       ctx.strokeStyle="#d40"  
       ctx.lineCap = "round";
       ctx.stroke();
       ctx.moveTo(125,80);  // Punto inicial de la línea
       ctx.lineTo(40,30);
       ctx.strokeStyle="#d40"  
       ctx.lineCap = "round";
       ctx.stroke();
      //triangulo
      ctx.fillStyle="rgba(125,0,0,0.5)";
      ctx.beginPath();
      ctx.strokeStyle = "rgba(125, 0, 200, 0.8)";
      ctx.moveTo(149,107);
      ctx.lineTo(83,173);
      ctx.lineTo(241,170);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle="rgba(125,0,0,0.5)";
      ctx.beginPath();
      ctx.strokeStyle = "rgba(125, 0, 200, 0.8)";
      ctx.moveTo(150,104);
      ctx.lineTo(345,105);
      ctx.lineTo(345,171);
      ctx.lineTo(244,169);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      //ARcos
      ctx.beginPath();
      ctx.arc(375,275,5,90,Math.PI*2,true);
      ctx.moveTo(340,275);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(475,275,5,90,Math.PI*2,true);
      ctx.moveTo(340,275);
      ctx.closePath();
      ctx.stroke();
      
      

      //casa figura
      ctx.fillRect (350,170,100,100);
      ctx.fillStyle = "rgba(0, 122, 133,0.7)";

      ctx.fillRect(345, 102, 110, 110);
      ctx.fillStyle = "rgb(0, 162, 232)";

      ctx.beginPath();
      ctx.arc(centerX-24, centerY, radius/4, 0, 1.0 * Math.PI); //el circulo completo es 2*Math.PI
      ctx.fillStyle = "#8ED6FF";
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#CCC';
      ctx.stroke();
      //ventana
      for (i = 15; i > 0; i--) {
        ctx.strokeStyle = "blue";
        ctx.lineCap = "round";
        ctx.lineWidth = i;
        ctx.beginPath();
        ctx.moveTo(250,centerY+4-i *2);
        ctx.lineTo( 300,centerY+4-i*2);
        ctx.stroke();
        ctx.lineCap = "round"; //Redondea las puntas
      }
      ctx.fillStyle="white";
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.moveTo(274,219);
      ctx.lineTo(275,253);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle="white";
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.moveTo(246,236);
      ctx.lineTo(309,234);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      //nube
      var startX = 410;
      var startY = 45;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
      ctx.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
      ctx.bezierCurveTo(startX + 200, startY + 70, startX + 200, startY + 40, startX + 210, startY + 20);
      ctx.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
      ctx.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
      ctx.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      ctx.closePath();
      }
  } else{
    alert("Necesitas un navegador web compatible con HTML5");
  }
}