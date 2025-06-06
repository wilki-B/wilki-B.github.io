const t = document.getElementById('t');
const b = document.getElementById('b');
const mensajesDiv = document.getElementById('mensajes');

// Función para cargar mensajes
async function cargarMensajes() {
    const response = await fetch('/obtener');
    const mensajes = await response.json();
    
    mensajesDiv.innerHTML = mensajes.map(m => 
        `<div>${new Date(m.fecha).toLocaleString()}: ${m.texto}</div>`
    ).join('');
}

// Enviar mensaje
b.addEventListener('click', async () => {
    await fetch('/enviar', {
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: t.value
    });
    t.value = ''; // Limpiar el textarea
    b.innerText = 'enviado';
    setTimeout(() => b.innerText = 'enviar', 2000);
    
    // Recargar mensajes
    await cargarMensajes();
});

// Cargar mensajes al inicio
cargarMensajes();