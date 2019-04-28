
//1.-Requerir librerías y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBUrl = require('./keys');
const PostalController = require('./controllers/admin');

const basicauth = require('./basicauth');
var auth = basicauth.auth;

//2.-Configurar web server y parsee los datos
const app = express();

//Esta instrucción permite hacer conexión en Heroku
var port = process.env.PORT || 3000;
app.use(bodyParser.json());


//3.- Definir paths disponibles
app.get('/', (req, res) => {
    res.send('Mongo Express.... Porfavor use /api/postales');
});
app.get('/api/postales',auth, PostalController.inq); //1
app.get('/api/postales/:id',auth, PostalController.inqId);
app.get('/api/postales/codigos/:codigo',auth, PostalController.inqByCP);
app.get('/api/codigos/ciudades',auth, PostalController.inqCiudad);
app.get('/api/municipios',auth, PostalController.inqMnpio);
app.get('/api/municipios/ciudades/:munName',auth, PostalController.inqCiudadByMnpio);
app.get('/api/municipios/iguales/colonias/:munName',auth, PostalController.inqColBySameMnpio);
app.get('/api/municipios/similares/colonias/:munName',auth, PostalController.inqColBySimilarMnpio);
app.get('/api/colonias/codigos/:codigo',auth, PostalController.inqColByCP);
app.get('/api/colonias',auth, PostalController.inqColonia);
app.get('/api/codigos',auth, PostalController.inqCP);

//4.- Encender webserver y dbserver
app.listen(port, () => {
    console.log('Server Inicializado en el puerto: ' + port);
    mongoose.connect(MongoDBUrl.conn, { useNewUrlParser: true })
        .then(() => {
            console.log('Server mongodb Conectado...')
        }, err => { console.log(err) });
});