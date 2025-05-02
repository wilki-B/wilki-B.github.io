let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let f = document.getElementById('mesa');
let Cfl = document.getElementById('Cfl');
let ca = document.getElementById("Ca");
let clz = document.getElementById("CLZ");
let lz = document.getElementById("lz");
let lzp = document.getElementById("lzp");
let nv = document.getElementById("nivelM");
let cn = document.getElementById("CN");



let automatico = false;

let perdida = false;

let velocidad = 2;
let trans = 500;
let nivel = 1;

let id = true;

let ab = true;


let x1= 0;
let y1 = 0;

let xdedo;
let xbola;
let cpr = [];



function reiniciar() {
    velocidad = 2;
    trans = 500;
    x1= 0;
    y1 = 0;
document.body.removeChild(cpr[0]);

document.body.removeChild(cpr[1]);
    perdida = false;
    id = true;
    ab = true;

    p1.style.left = '0px';
    p1.style.top = '0px';
    cpr = [];
    
    nivel = 1;
    
}


  
function X(p,vel) {
   
  
     
let xbg = p.getBoundingClientRect();
xbola = xbg.left;
   
      
   if(id===true) {
       
   x1 += vel;
   
 p.style.left= `${x1}px`;

 }
 
 
 
 
  if(id===false) {
  
 
  x1 -= vel;
   
 p.style.left = `${x1}px`;
  
 }
 
 
   
   
   
       




  if(x1>=360) {
  id=false;
     
  } 
  
  
  if(x1<=0) {
  id=true;
     
  } 
       
   
   
   requestAnimationFrame(() => X(p,velocidad)); 
}



function Y(p,vel) {
    
      
   if(ab===true) {
       
   y1 += vel;
   
 p.style.top= `${y1}px`;

 }
 
 
 
 
  if(ab===false) {
  
 
  y1 -= vel;
   
 p.style.top = `${y1}px`;
  
 }
 
 
   
   
   if(y1>=250 && xbola <= xdedo+45 && xbola >=xdedo-50 && y1 <=275) {
       
  
      
  p.style.background = "blue";
 Cfl.style.transform = 'rotate(180deg)';
  f.style.background = "#2500a18b";
  f.style.border = " dashed 3px blue";
  ca.style.background = "#02001f";
   lz.style.boxShadow = "0px 0px 33px #05004f";
   clz.style.background = "#0003ff28";
   lzp.style.boxShadow =" 0px 0px 33px #1243dd";
   lzp.style.background =" #1243dd";
   clz.style.boxShadow =" 0px 0px -30px #4600dd";
   clz.style.borderColor ="#4600dd";
    cn.style.background = "linear-gradient(#000000,#000000,#0003d0e7)";
  
  
  if(y1>=250) {
  ab=false;
     
  } 
  
  }
  
  
  if(y1<=25) {
  ab=true;
   p.style.background = "#00f3b7";
 Cfl.style.transform = 'rotate(0deg)';
   f.style.background = "#008e6b9b";
  f.style.border = " dashed 3px #00f3b7";
     ca.style.background = "#001f1c";
lz.style.boxShadow = "0px 0px 33px #004f3c";
   clz.style.background = "#00ffc020";
   lzp.style.boxShadow =" 0px 0px 33px #12dd9e";
     lzp.style.background ="#12dd9e ";
   clz.style.boxShadow =" 0px 0px -30px #00ddcb";
    clz.style.borderColor ="#00ddcb";
   cn.style.background ="linear-gradient(#000000,#000000,#00ffab72)";
     ;
    
  } 
    
    if(trans>1) {
        
    
     trans -= 1; 
     }
      
p3.style.transition = `${trans}ms`;

   
 
    
  
if (y1>330) {
    
    if (perdida===false) {
        
    
    let Cpe = document.createElement('div');
    
    
    Cpe.id = 'Cpe';
    Cpe.innerHTML = `<h1 id="hcpe">¡Perdiste!</h1><p>Avanzaste hasta el nivel: ${nivel}</p><button id="Bp">Reiniciar</button>`;
    let Fp = document.createElement('div');
    
    Fp.id = "Fp";
    
    document.body.appendChild(Fp);
    
    
    
   cpr.push(Cpe);
   
   cpr.push(Fp);
    
    document.body.appendChild(Cpe);
    
    
    
    document.getElementById("Bp").addEventListener('touchstart', () => {
        
       reiniciar();
        
        
    });
    
    
    
    
    
    
    perdida = true;
    
    
    }
    
    
    
    
}

if(y1>=700) {
    ab=false
}
    nv.innerText = nivel;

   requestAnimationFrame(() => Y(p,velocidad));

    
}




function perseguir(p) {
   
   
   p.style.left = `${x1}px`;
   requestAnimationFrame(() => perseguir(p,velocidad));
 
       
   if(automatico ===true) {
       
         
    let d= p.getBoundingClientRect();
    let x = d.left;
   
       
        
        
        xdedo = x;
   
    }
   
}










function mover(p) {
    
    
    
    
    
    p.addEventListener('touchmove', (e) => {
        
        e.preventDefault();
         
    let toque = e.touches[0];
    let x = toque.clientX;
    
   
        p.style.left = `${x-25}px`;
        
        
        xdedo = x;
        
    });
    
    
    
    
    
    
}



perseguir(p3);

if(automatico===true) {
    

perseguir(p2);
}

mover(p2);


function jq() {
   setTimeout(() => {
    
  
   
    velocidad += 1;
    nivel++;  
   
   jj(); 
    
   },10000);
   
   
       
   
   

  
   
 
}

function jj() {
setTimeout(() => {
    
  
   
    velocidad += 1;  
    nivel++;
       jq(); 
    
   },10000);
   
   
       
   
   

  
   
   
}

function empezar() {
 
jj();
X(p1,velocidad);


Y(p1,velocidad);

}
empezar();
