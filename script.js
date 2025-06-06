let t = document.getElementById('t');
let b = document.getElementById('b');


b.addEventListener('touchstart', () => {
    
    fetch('/enviar',{method:'POST',headers:{'Content-Type':'text/plain'},body:t.value}).then(res => res.text()).then(res => b.innerText=res);
    
    
});