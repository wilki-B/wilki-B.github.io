
let bola = document.getElementById('bola');

  
bola.addEventListener('touchmove', (e) => {

e.preventDefault();


let x = e.touches[0].clientX;
let y = e.touches[0].clientY;

bola.style.transform =`translate(${x}px,${y}px)`;






});