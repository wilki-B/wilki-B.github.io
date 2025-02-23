let chi = document.getElementById('chi');
let cuerppp = document.getElementById('cuerpo');
let cuel = document.createElement('div');
let boton = document.getElementById('boton');

let ct= document.createElement('div');

ct.id = 'ct';

document.body.appendChild(ct);

ct.innerHTML = 'Mover';

let colores = ['#5000ff8e','#3bff008e','#ff000a8e','#00d5ff8e'];

let i = 0;

function alumbrar() {
    setTimeout(() => {
        
        ct.style.background = `${colores[i]}`;
        i++
        if (i===3) {
          i = 0;  
        }
        alumbrar();
    },300);
    
}

alumbrar();



setTimeout(() => {
    
    cuerppp.appendChild(cuel);
    cuel.id = 'cue';
    
},500);



let tu = false;


boton.addEventListener('touchmove', (e) => {
    
    if(tu===false) {
        
    
     document.body.removeChild(ct);
     tu = true;
   }
    
    e.preventDefault();
    
    let t = e.touches[0];
    
    let y = t.clientY;
    
    
    
    chi.style.transform = `translate(${0}px,${y-450-230}px)`;
    
    if(y <= 615) {
        chi.style.transform = `translateY(${60-120+4}px)`;
    }
     
//:::::::::::::::::::::::::::::::::::::::::::::::     
     
        
     
     let TU = document.getElementById('tet1');
     let TD= document.getElementById('tet2');
     
     let RU = document.getElementById('relleno1');
     let RD = document.getElementById('relleno2');
     
     
     let C = document.getElementById('cuerpo');
     
      let NU = document.getElementById('nali');
      let ND = document.getElementById('nald');
      let H = document.getElementById('homb');  
    
   TU.style.animation = 'STU 500ms linear 0s infinite normal';
  
   TD.style.animation = 'STD 500ms linear 0s infinite normal';
   
   RU.style.animation = 'SRU 50ms linear 0s infinite normal';
   
   
   RD.style.animation = 'SRD 500ms linear 0s infinite normal';
    
   C.style.animation ='SC 450ms linear 0s infinite normal';
    NU.style.animation ='SC 450ms linear 0s infinite normal';
    
    ND.style.animation ='SC 450ms linear 0s infinite normal';
   H.style.animation ='SC 450ms linear 0s infinite normal';
  
});


     
boton.addEventListener('touchend', (e) => {
   
     let TU = document.getElementById('tet1');
     let TD= document.getElementById('tet2');
     
     let RU = document.getElementById('relleno1');
     let RD = document.getElementById('relleno2');
     
     
     let C = document.getElementById('cuerpo');
     
      let NU = document.getElementById('nali');
      let ND = document.getElementById('nald');
      let H = document.getElementById('homb');  
    
   TU.style.animation = '';
  
   TD.style.animation = '';
   
   RU.style.animation = '';
   
   
   RD.style.animation = '';
    
   C.style.animation ='';
    NU.style.animation ='';
    
    ND.style.animation ='';
   H.style.animation ='';
  
    
});
