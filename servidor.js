const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";


// Configuración de MongoDB
const uri = "mongodb+srv://usuario:contraseña@cluster0.mongodb.net/nombredb?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(express.static(__dirname));
app.use(express.text({type:'text/plain'}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/enviar', async (req, res) => {
    try {
        await client.connect();
        const database = client.db("mensajesdb");
        const collection = database.collection("mensajes");
        
        // Insertar el mensaje
        await collection.insertOne({
            texto: req.body,
            fecha: new Date()
        });
        
        res.send('enviado');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al guardar');
    } finally {
        await client.close();
    }
});

app.get('/obtener', async (req, res) => {
    try {
        await client.connect();
        const database = client.db("mensajesdb");
        const collection = database.collection("mensajes");
        
        // Obtener todos los mensajes ordenados por fecha
        const mensajes = await collection.find().sort({fecha: -1}).toArray();
        
        res.json(mensajes);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener mensajes');
    } finally {
        await client.close();
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});