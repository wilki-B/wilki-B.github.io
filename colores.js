let colores =['red','blue','yellow','orange','grey','blueViolet','violet','green','#1cff15','brown'];

let meta =400;


 let tiempo = 6000;  
document.getElementById('meta').innerHTML= `${meta}`;

let cc = false;
let puntosContador = 0;
let colorE;
let colorED;

let coloresEspa帽ol = ['rojo','azul','amarillo','naraja','gris','azul voileta','rosado','verde','verde encendido','cafe'];

let colorFinalEspa帽ol = 'blanco';



   





for (let i = 1; i <= 10; i++) {
    
    let divs = document.getElementById(`n${i}`);
    
    
    divs.className = 'divs';
    
    divs.style.background = colores[i-1];
    
    
}






let bola = document.getElementById('bola');
let colorFinal;
let distancia = [];


function cambiarColor(color) {
    bola.style.background = color;
    bola.style.boxShadow = `-3px -3px 60px ${color}`;
    colorFinal= color;
    
    for (let e = 0; e <= 9; e++) {
      if(color===colores[e]) {
        colorFinalEspa帽ol= coloresEspa帽ol[e]; 
      }  
  }
   
   }

 function llamarCambioDeColores() {
        
    
      
    
   
    
     
    
    
    
    cambiarColor(colores[i]);
    if(i<9) {
        
    
   i++
   }
   else if(i>=9) {
      i=0 
   }
   
  
   } 
   




let i = 0;
bola.addEventListener('touchstart', (e) => {
    
    e.preventDefault();
    
    let toque = e.touches[0];
    let div= bola.getBoundingClientRect();
    
    distancia.push(toque.clientX -div.left,toque.clientY - div.top);
   
});





   let cambiadorDeColoresTocado= false;
    




bola.addEventListener('touchmove',  (e) => {
    
    e.preventDefault();
    
   
    let toque = e.touches[0];
    
    let x = toque.clientX-distancia[0];
    let y = toque.clientY-distancia[0];
    
    bola.style.transform = `translate(${x-300}px, ${y-300}px)`;  
    
    
    
    if(y>659) {
        
    
   llamarCambioDeColores();
   
   cambiadorDeColoresTocado=true;
    
       document.getElementById('entrega').style.animation= 'nada'; 
   
   
   } else if (y< 659 && cambiadorDeColoresTocado===true){
   
   
     let cF = document.getElementById('colorFinal');
      
       cF.innerHTML= colorFinalEspa帽ol;
       cF.style.color= colorFinal;
       
       
       let div = document.getElementById('entrega').getBoundingClientRect();
       let cirY = div.top;
       let cirX = div.left;
       let cirW = div.width;
    
   let circuloDeEntrega = document.getElementById('entrega');
   let puntos = document.getElementById('puntoss');
   
   
   
   
   function verificar() {
       
       
       
   
       
       if(colorFinal===colorE && y> cirY &&  y< cirY+cirW && x >cirX && x < cirX+cirW) {
          
   circuloDeEntrega.innerHTML ='隆CORRECTO!';
   circuloDeEntrega.style.animation= 'agrandar 1s';
   
   puntos.innerHTML= `${puntosContador}`;
       puntosContador++
       
         if(puntosContador>=meta ) {
             
         
        tiempo = 150;
        terminar();
        bola.style.zIndex = '0';
        
        puntosContador = meta;
     
   }


          
       } 
       
       
       
        
       
       
       if(colorFinal !==colorE) {
           
      
          
           circuloDeEntrega.innerHTML ='隆INCORRECTO';
           
            circuloDeEntrega.style.animation= 'agrandar 1s';

       }
          
       }
       
       
       
       
       
       
       
       
     
    if( y< cirY+cirW && x >cirX && x < cirX+cirW ) {
             verificar()
         }  
       
   
     
       
       
       
       
       
       
       
       
       
       
       
   }
});



function escojerColor(color) {
   for (i = 0; i <=9 ; i++) {
       
   
   if(color===colores[i]) {
      document.getElementById(`n${i+1}`).style.top = '25%';
      
      
      
      
      
      let cir  =document.getElementById('entrega');
     cir.style.borderColor = color;
     cir.style.boxShadow = `0px 0px 50px ${color}`
      
   }
   
   }
   
   
}


function escojerColorD(colorD) {
   for (i = 0; i <=9 ; i++) {
       
   
   if(colorD===colores[i]) {
      document.getElementById(`n${i+1}`).style.top = '0%';
      
      
     
   }
   
   }
   
   
}





function terminar() {
      let contenedor = document.createElement('div');
      
      contenedor.id= 'terminado';
      
      
      document.body.appendChild(contenedor);
    
    
    if(puntosContador>=meta) {
       
       contenedor.innerHTML = '<h1>!GANASTE!馃檪</h1>';
       contenedor.style.border = 'double 10px greenyellow';
       contenedor.style.color = 'greenyellow';
       
        
       
       
    } else {
        
        contenedor.innerHTML ='<h1>PERDISTE馃様</h1>';
        
        contenedor.style.border = 'double 10px red';
       contenedor.style.color = 'red';
    }
    
}
    
  
      
  
    
    



let contador = 0;
let contadorDos = 0;




      
     
   


function colorAleatorio(tiempo) {
 
   
   
   setTimeout(() => {
       
      contador++
      
      
      colorE = colores[contador-1];
      colorED = colores[contador-2];
      

      escojerColor(colorE);
      escojerColorD(colorED);
      
      
      
     colorAleatorio(tiempo);
     
   },tiempo);
   
   
 
      
   if (contador>10) {
        contador = 0;
        tiempo= 150;
         bola.style.zIndex = '0'; 
 
 }
 

 
 }
   
 
 colorAleatorio(tiempo);



setTimeout(() => {
    
   terminar();
    
},tiempo*11);








let contadorPrin= 60;

function o() {
    

setTimeout(() => {
   if(contadorPrin>0) {
       
   
  contadorPrin--
  document.getElementById('entrega').innerHTML =`Tiempo:${contadorPrin}`;
  o();
  }  
    
},1000);}








contadorCom= 6;

function c() {
    

setTimeout(() => {
    if(contadorCom>0) {
        
    
   contadorCom--
   document.getElementById('entrega').innerHTML = `${contadorCom}`
   c();
   
   } else {o()}
   
},1000);
}


c();

  
