let express = require('express');
let app = express();
let fs = require('fs')



app.use(express.static(__dirname));
app.use(express.text({type:'text/plain'}));

app.get('/', (req,res) => {


    res.SendFile(__dirname+'index.html');





});

app.post('/enviar', (req,res) => {

    fs.appendFile(`archivo.txt`,req.body+'\n',(err) => {

        if(err) {
            console.log(err)
        } else {
            console.log(`mensaje: (${req.body}), guardado con exito✅`);


        }


    });

   res.send('enviado');

});


app.listen(3000,'0.0.0.0', () => {


    console.log('escuchando puerto 3000');

});
