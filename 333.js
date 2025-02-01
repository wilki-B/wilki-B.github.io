const canvas = document.getElementById('canvas');



let m = document.getElementById('m');

const ctx = canvas.getContext('2d');


let linea = document.getElementById('linea');
let linea2 = document.getElementById('linea2');
let linea3 = document.getElementById('linea3');

let trazador =[document.getElementById('trazador'),document.getElementById('trazador2'),document.getElementById('trazador3')];


let rojo = 0;
let amarillo = 1;
let azul = 2;

let trazarCon = rojo;

let colorE = "white";


let numeropara = document.getElementById('numero').value;

let repetir = "infinite";



let puntos = [];

//botones de seg a miliseg


let estado_de_boton_de_tiempov = "seg";
let estado_de_boton_de_tiempor = "seg";
let estado_de_boton_de_tiempoa = "seg";
let estado_de_boton_de_tiempoaz = "seg";


let somv = "s";
let somr = "s";
let soma = "s";
let somaz = "s";


let tv = document.getElementById('ml_o_s_v');

let tr = document.getElementById('ml_o_s_r');

let ta = document.getElementById('ml_o_s_a');

let taz = document.getElementById('ml_o_s_az');


tv.addEventListener('click', () => { 
  if(estado_de_boton_de_tiempov==="seg") {
      
  tv.innerText = "miliseg";
  
  estado_de_boton_de_tiempov = "miliseg";
  
  somv = "ms";
  } else {  tv.innerText = "seg";
    
  estado_de_boton_de_tiempov = "seg";
  
  somv = "s";
  } 
      
  
    });

tr.addEventListener('click', () => { 

 if(estado_de_boton_de_tiempor==="seg") {   tr.innerText = "miliseg";
    
  estado_de_boton_de_tiempor = "miliseg"; 
  
  somr = "ms";
  } else {  tr.innerText = "seg";
    
  estado_de_boton_de_tiempor = "seg";
  
  somr = "s";
  } 
    
    });
    
    
    
    
    
    ta.addEventListener('click', () => { 
  if(estado_de_boton_de_tiempoa==="seg") {
      
  ta.innerText = "miliseg";
  
  estado_de_boton_de_tiempoa = "miliseg";
  
  soma = "ms";
  } else {  ta.innerText = "seg";
    
  estado_de_boton_de_tiempoa = "seg";
  
  soma = "s";
  } 
      
  
    });




  taz.addEventListener('click', () => { 
  if(estado_de_boton_de_tiempoaz==="seg") {
      
  taz.innerText = "miliseg";
  
  estado_de_boton_de_tiempoaz = "miliseg";
  
  somaz = "ms";
  } else {  taz.innerText = "seg";
    
  estado_de_boton_de_tiempoaz = "seg";
  
  somaz = "s";
  } 
      
  
    });
//...........................
let estado_de_boton_de_direccionv = "der";
let estado_de_boton_de_direccionr = "der";
let estado_de_boton_de_direcciona = "der";
let estado_de_boton_de_direccionaz = "der";



let doiv = "linear";
let doir = "linear";
let doia = "linear";
let doiaz = "linear";


let dv = document.getElementById('d_o_i_v');

let dr = document.getElementById('d_o_i_r');

let da = document.getElementById('d_o_i_a');

let daz = document.getElementById('d_o_i_az');


  dv.onclick = () => { 
  
  if (estado_de_boton_de_direccionv==="der") {
     doiv = "reverse";
     dv.innerText = "izqu";
      estado_de_boton_de_direccionv="izqu"
  } else {
      doiv = "linear";
      dv.innerText = "der"
      estado_de_boton_de_direccionv="der";
  }
  
  
  };




  dr.onclick = () => { 
  
  if (estado_de_boton_de_direccionr==="der") {
     doir = "reverse";
     dr.innerText = "izqu";
      estado_de_boton_de_direccionr="izqu"
  } else {
      doir = "linear";
      dr.innerText = "der"
      estado_de_boton_de_direccionr="der";
  }
  
  
  };



  da.onclick = () => { 
  
  if (estado_de_boton_de_direcciona==="der") {
     doia = "reverse";
     da.innerText = "izqu";
      estado_de_boton_de_direcciona="izqu"
  } else {
      doia = "linear";
      da.innerText = "der"
      estado_de_boton_de_direcciona="der";
  }
  
  
  };


  daz.onclick = () => { 
  
  if (estado_de_boton_de_direccionaz==="der") {
     doiaz = "reverse";
     daz.innerText = "izqu";
      estado_de_boton_de_direccionaz="izqu"
  } else {
      doiaz = "linear";
      daz.innerText = "der"
      estado_de_boton_de_direccionaz="der";
  }
  
  
  };

 
//..............................................


//...................

function empezar() {

let numero0 = document.getElementById('numerod').value;


let numero = document.getElementById('numero').value;


let numero2 = document.getElementById('numerot').value;

let numero3 = document.getElementById('numeroc').value;


      m.style.animation = `girar ${numero}${somv} 0s infinite`;
      
      m.style.animationTimingFunction = "linear";
      
       m.style.animationDirection = `${doiv}`;


linea.style.animation = `girar2 ${numero0}${somr} ${doir} 0s infinite`;

linea.style.animationTimingFunction = "linear";
      
   linea.style.animationDirection = `${doir}`;



linea2.style.animation = `girar3 ${numero2}${soma} ${doia} 0s infinite`;


linea2.style.animationTimingFunction = "linear";
      
 linea2.style.animationDirection = `${doia}`;


linea3.style.animation = `girar4 ${numero3}${somaz} ${doiaz} 0s infinite`;

 
linea3.style.animationTimingFunction = "linear";
      
 linea3.style.animationDirection = `${doiaz}`;








actualizarPosicion();

}











function actualizarPosicion() {
  const rect = trazador[trazarCon].getBoundingClientRect();
  const canvasRect = canvas.getBoundingClientRect();
  const posicionIzquierda = rect.left - canvasRect.left;
  const posicionArriba = rect.top - canvasRect.top;

  // Interpolación
  const puntosLength = puntos.length;
  if (puntosLength > 1) {
    const ultimoPunto = puntos[puntosLength - 1];
    const nuevoPunto = { x: posicionIzquierda, y: posicionArriba };
    const distancia = Math.sqrt(Math.pow(nuevoPunto.x - ultimoPunto.x, 2) + Math.pow(nuevoPunto.y - ultimoPunto.y, 2));
    if (distancia > 1) { // Umbral de distancia para determinar si se debe registrar un nuevo punto
      puntos.push(nuevoPunto);
    } else {
      puntos[puntosLength - 1] = nuevoPunto; // Actualiza el último punto registrado
    }
  } else {
    puntos.push({ x: posicionIzquierda, y: posicionArriba });
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = `${colorE}`;
  ctx.lineWidth = 1;
  ctx.moveTo(puntos[0].x, puntos[0].y);
  for (let i = 1; i < puntos.length; i++) {
    ctx.lineTo(puntos[i].x, puntos[i].y);
  }
  ctx.stroke();
  requestAnimationFrame(actualizarPosicion);
}

 

function escojerColor() {
let contenedorC =document.createElement('div');
let escojido = document.getElementById('escojer_color');

 
 



  let colores = [
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button'),
 document.createElement('button')
];
 
document.body.appendChild(contenedorC); 

contenedorC.id = 'contenedorColores'; 
 
for (let i = 0; i < 11 ; i++) {
    contenedorC.appendChild(colores[i]);
    colores[i].className = "colores";
    colores[i].id = `color${i}`;
    colores[i].style.gridArea = `c${i}`;
    
   

    
} 
   
   
 atras(contenedorC);




   
  
    



document.getElementById('color1').onclick = () => {
  
    colorE= "blue";
    escojido.style.backgroundColor= `${colorE}`;
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color2').onclick = () => {
  
    colorE= "aqua";
    escojido.style.backgroundColor= `${colorE}`;
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color3').onclick = () => {
  
    colorE= "blueViolet";
   escojido.style.backgroundColor= `${colorE}`;  
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color4').onclick = () => {
  
    colorE= "green";
   escojido.style.backgroundColor= `${colorE}`;  
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color5').onclick = () => {
  
    colorE= "yellow";
   escojido.style.backgroundColor= `${colorE}`;    
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color6').onclick = () => {
  
    colorE= "red";
    escojido.style.backgroundColor= `${colorE}`;   
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color7').onclick = () => {
  
    colorE= "#00ff96";
    escojido.style.backgroundColor= `${colorE}`;   
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color8').onclick = () => {
  
    colorE= "#ff00f1";
    escojido.style.backgroundColor= `${colorE}`;  
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color9').onclick = () => {
  
    colorE= "#ff5e00";
    escojido.style.backgroundColor= `${colorE}`;  
    
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};

document.getElementById('color10').onclick = () => {
  
    colorE= "brown";
    escojido.style.backgroundColor= `${colorE}`;   
     document.body.removeChild(contenedorC);
   document.body.removeChild(atras); 
};




} 

function atras(elemento) {
      let atras = document.createElement('div');
     document.body.appendChild(atras); 
atras.innerText = ".";
atras.id = 'atras';
atras.addEventListener('click', () => {
  
 document.body.removeChild(elemento);
 document.body.removeChild(atras);
});
 

}
 
 
function borrar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

puntos = []; // Limpia el arreglo de puntos

cancelAnimationFrame(actualizarPosicion); // Detiene la recursividad



}



function trazar_con() {

    let contenedorT = document.createElement('div');




    

    
    contenedorT.id= 'contenedorT';
    document.body.appendChild(contenedorT);
    
    //contenido...........
    
    contenedorT.innerHTML= "<h5 id='tituloT'>Trazar con la linea:</h5><button id='trazarR'>roja</button><button id='trazarA'>amarilla</button><button id='trazarAz'>azul</button>";
    
    atras(contenedorT);
    
    
    //agregar eventos a botones
    
    document.getElementById('trazarA').addEventListener('click', () => {
        
        trazarCon = amarillo;
        
    });

document.getElementById('trazarR').addEventListener('click', () => {
        
        trazarCon = rojo;
        
    });

document.getElementById('trazarAz').addEventListener('click', () => {
        
        trazarCon = azul;
        
    });


  
 
}






function parar() {
puntos.push();
linea.style.animation = "";

m.style.animation = "";

linea2.style.animation = "";

linea3.style.animation = "";


}






